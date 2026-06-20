import Link from "next/link";
import Image from "next/image"; // Imported Next.js Image component
import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@heroui/react";

export default function PropertyCard({ property }) {
  // Fixed Destructuring to match: "images" and "rentPrice" from your schema payload
  const { _id, title, images, location, price, rentType } = property;
  const propertyId = _id?.$oid || _id || "";

  // Dynamic fallback image selector 
  const displayImage = images || "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="backdrop-blur-xl bg-white/2 border border-white/6 hover:border-cyan-500/30 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] h-full">
      
      {/* 1. Image and Rent Type Badge Area */}
      <div className="relative overflow-hidden h-50 w-full bg-slate-800">
        <Image
          src={displayImage}
          alt={title || "Property Image"}
          fill // Uses container dimension properties seamlessly
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121824] via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="absolute top-3 left-3 backdrop-blur-md bg-black/40 border border-white/10 px-2.5 py-0.5 rounded-md text-[10px] font-medium text-cyan-400 uppercase tracking-widest z-10">
          {rentType || "Monthly"}
        </div>
      </div>

      {/* 2. Core Information Layout */}
      <div className="p-5 grow flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-1.5">
          {/* Price Header using rentPrice variable */}
          <div className="text-xl font-black text-slate-100">
            ${price}
            <span className="text-xs text-slate-400 font-light font-sans"> / month</span>
          </div>

          {/* Title Element */}
          <h3 className="text-base font-bold text-slate-200 tracking-wide line-clamp-1 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>

          {/* Location Details Container */}
          <div className="flex items-center gap-1 text-slate-400 text-xs font-light">
            <MapPin size={12} className="text-purple-400 shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* 3. Operational Routing Action Button */}
        <div className="pt-1">
          <Link href={`/all-client/all-properties/${propertyId}`} className="block w-full">
            <Button
              className="w-full h-10 bg-white/3 hover:bg-linear-to-r hover:from-cyan-500 hover:to-purple-600 border border-white/8 hover:border-transparent text-white font-medium text-xs rounded-xl tracking-wide transition-all duration-300 flex items-center justify-center gap-1 group/btn"
              variant="flat"
            >
              View Details
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}