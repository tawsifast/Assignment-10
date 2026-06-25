
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    customer_email: body.email,
    metadata: {
    bookingId: body.bookingId,
  },

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Property Booking",
          },
          unit_amount: body.amount * 100,
        },
        quantity: 1,
      },
    ],

    success_url: `${process.env.CLIENT_SIDE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_SIDE_URL}`,
  });

  return NextResponse.json({ url: session.url });
}

