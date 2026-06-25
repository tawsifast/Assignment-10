import React from "react";
import { ShieldCheck, Zap, Key, Video, Headphones, CreditCard } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="text-cyan-400" size={24} />,
    title: "Verified Documentation",
    desc: "Every duplex and loft listing goes through a strict legal and owner verification process for maximum security.",
  },
  {
    icon: <Zap className="text-amber-400" size={24} />,
    title: "Instant Booking & Dispatch",
    desc: "No long waiting times. Secure your premium tenancy slot instantly with our automated smart-contract system.",
  },
  {
    icon: <Key className="text-purple-400" size={24} />,
    title: "Smart Lock Integration",
    desc: "Access your rented property seamlessly with automated digital key handovers upon successful checkout payment.",
  },
  {
    icon: <Video className="text-pink-400" size={24} />,
    title: "3D Virtual Property Tours",
    desc: "Explore every corner of the scouting legion headquarters or urban lofts remotely before investing your money.",
  },
  {
    icon: <CreditCard className="text-emerald-400" size={24} />,
    title: "Automated Stripe Telemetry",
    desc: "Crystal clear financial transactions. Track your automated monthly rents or deposit payouts directly from dashboard.",
  },
  {
    icon: <Headphones className="text-blue-400" size={24} />,
    title: "24/7 Concierge Support",
    desc: "Dedicated rental managers available round the clock to solve maintenance requests within 1 hour.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#030307] text-white p-8 md:p-16 antialiased selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Our Ecosystem
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Premium Living Services
          </h1>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            We bridge the gap between futuristic real-estate telemetry and premium, hassle-free tenancy. Explore what makes us unique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="backdrop-blur-xl bg-white/[0.01] border border-white/[0.05] p-6 rounded-2xl space-y-4 shadow-xl hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}