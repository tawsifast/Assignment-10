import { redirect } from "next/navigation";
import Link from "next/link";
import { stripe } from "@/lib/stripe";

export default async function PaymentSuccessPage({ searchParams }) {
  // 🔥 Next.js-এর নতুন নিয়মে searchParams কে await করতে হয়
  const params = await searchParams;
  const session_id = params?.session_id;

  // ❌ যদি session_id না আসে, তাহলে হোমপেজে ব্যাক করবে
  if (!session_id) {
    return redirect("/");
  }

  let session;
  try {
    // 🔥 Stripe থেকে session fetch
    session = await stripe.checkout.sessions.retrieve(session_id);
    // ✅ পেমেন্ট সফল হলে booking এর paymentStatus আপডেট করা হচ্ছে
    if (session.payment_status === "paid" && session.metadata?.bookingId) {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${session.metadata.bookingId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentStatus: "paid" }),
        },
      );
      // Transaction রেকর্ড সেভ
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId: session.metadata.bookingId,
          stripeSessionId: session.id,
          userEmail: session.customer_details?.email,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          currency: session.currency,
          paymentStatus: session.payment_status,
          transactionDate: new Date().toISOString(),
        }),
      });
    }
  } catch (error) {
    console.error("Stripe session retrieval error:", error);
    return redirect("/");
  }

  const customerEmail = session.customer_details?.email;
  const amountTotal = session.amount_total ? session.amount_total / 100 : 0;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#030307] text-center p-4 antialiased">
      <div className="w-full max-w-md bg-[#09090f] border border-white/5 rounded-2xl p-8 shadow-2xl space-y-6">
        {/* Success Icon */}
        <div className="text-emerald-400 text-6xl flex justify-center animate-bounce">
          ✅
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Payment Successful
        </h1>

        {/* Message */}
        <p className="text-xs text-slate-400 font-medium">
          Thank you for your booking payment. Your transaction has been
          validated.
        </p>

        {/* Details Card */}
        <div className="bg-[#030307] border border-white/10 p-5 rounded-xl space-y-3 text-left">
          <p className="text-xs font-mono text-slate-400 flex justify-between">
            <span className="font-bold uppercase tracking-wider">Email:</span>
            <span className="text-slate-200 select-all">
              {customerEmail || "N/A"}
            </span>
          </p>
          <div className="h-[1px] bg-white/5" />
          <p className="text-xs font-mono text-slate-400 flex justify-between">
            <span className="font-bold uppercase tracking-wider">
              Amount Paid:
            </span>
            <span className="text-emerald-400 font-bold">
              ${amountTotal.toFixed(2)}
            </span>
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center bg-white text-[#030307] hover:bg-slate-200 px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
          >
            Go to Dashboard Home
          </Link>
        </div>
      </div>
    </div>
  );
}
