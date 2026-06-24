// "use client";

// import React, { useState } from "react";
// import { Button, Input, Select, SelectItem } from "@heroui/react";
// import { Search, MapPin, Home, DollarSign, SlidersHorizontal } from "lucide-react";

// const HomeBanner = () => {
//   // সার্চ ফিল্ডগুলোর জন্য স্টেট (যদি পরবর্তীতে হ্যান্ডেল করতে চান)
//   const [searchParams, setSearchParams] = useState({
//     location: "",
//     propertyType: "",
//     minPrice: "",
//     maxPrice: "",
//   });

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("Searching for Data:", searchParams);
//     // এখানে আপনার এপিআই ফিল্টারিং বা রাউটিং লজিক বসাতে পারেন
//   };

//   return (
//     <section className="w-full bg-[#0e0f19] pt-8 pb-20 px-4 md:px-8 relative overflow-hidden">
      
//       {/* Background Cyberpunk Ambient Glows */}
//       <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
//       <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* Left Side: Compelling Title & Description */}
//         <div className="lg:col-span-7 space-y-6 text-left">
//           <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">
//             <span className="size-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
//             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next-Gen Property Finder</span>
//           </div>
          
//           <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
//             Find Your Next <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400">
//               Perfect Matrix Living
//             </span>
//           </h1>
          
//           <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
//             Discover architectural wonders tailored precisely to your operational needs. Secure leases, track smart metrics, and lock in premier properties with fully integrated smart dashboard clearance.
//           </p>

//           {/* Desktop & Tablet Advanced Search Bar Container */}
//           <div className="w-full pt-4 hidden sm:block">
//             <form 
//               onSubmit={handleSearchSubmit} 
//               className="w-full bg-[#161726]/90 backdrop-blur-xl border border-white/[0.08] p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center gap-3"
//             >
//               {/* Location Input */}
//               <div className="flex-1 w-full space-y-1">
//                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 px-1">
//                   <MapPin className="size-3 text-cyan-400" /> Location
//                 </span>
//                 <input 
//                   type="text" 
//                   placeholder="Where are you looking?"
//                   className="w-full bg-[#0d0e16] border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-cyan-500/50 outline-none transition-all h-9"
//                   onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
//                 />
//               </div>

//               {/* Property Type Dropdown */}
//               <div className="flex-1 w-full space-y-1">
//                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 px-1">
//                   <Home className="size-3 text-purple-400" /> Type
//                 </span>
//                 <select 
//                   className="w-full bg-[#0d0e16] border border-white/5 rounded-xl px-2 py-2 text-xs text-slate-400 focus:border-purple-500/50 outline-none transition-all h-9 cursor-pointer"
//                   onChange={(e) => setSearchParams({...searchParams, propertyType: e.target.value})}
//                 >
//                   <option value="">Select Type</option>
//                   <option value="apartment">Apartment</option>
//                   <option value="penthouse">Penthouse</option>
//                   <option value="cabin">Cabin</option>
//                   <option value="mansion">Mansion</option>
//                 </select>
//               </div>

//               {/* Min Price */}
//               <div className="w-full md:w-28 space-y-1">
//                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 px-1">
//                   <DollarSign className="size-3 text-emerald-400" /> Min Price
//                 </span>
//                 <input 
//                   type="number" 
//                   placeholder="Min ($)"
//                   className="w-full bg-[#0d0e16] border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-emerald-500/50 outline-none transition-all h-9"
//                   onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
//                 />
//               </div>

//               {/* Max Price */}
//               <div className="w-full md:w-28 space-y-1">
//                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 px-1">
//                   <DollarSign className="size-3 text-rose-400" /> Max Price
//                 </span>
//                 <input 
//                   type="number" 
//                   placeholder="Max ($)"
//                   className="w-full bg-[#0d0e16] border border-white/5 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:border-rose-500/50 outline-none transition-all h-9"
//                   onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
//                 />
//               </div>

//               {/* Submit Trigger Action Button */}
//               <button 
//                 type="submit" 
//                 className="w-full md:w-auto h-9 mt-4 md:mt-0 px-5 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shrink-0"
//               >
//                 <Search className="size-3.5" />
//                 <span>Search</span>
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right Side: Perfect Square Shape Image Holder */}
//         <div className="lg:col-span-5 flex justify-center">
//           <div className="relative aspect-square w-full max-w-[380px] sm:max-w-[420px] rounded-2xl p-[1px] bg-gradient-to-tr from-purple-500/30 via-transparent to-cyan-400/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] group">
            
//             {/* Ambient Behind-Image Glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-500 pointer-events-none" />
            
//             {/* The Core Square Box Wrapper */}
//             <div className="w-full h-full bg-[#121320] rounded-[15px] overflow-hidden relative">
//               <img 
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" // এই লিংকটি আপনার হাই-কোয়ালিটি রিয়েল এস্টেট ইমেজ লিংকে রিপ্লেস করতে পারেন
//                 alt="NexusHome Premium Hub"
//                 className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
//               />
//               {/* Subtle Tech Overlay Ring inside the Image */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f19] via-transparent to-transparent opacity-60" />
//               <div className="absolute bottom-4 left-4 right-4 bg-[#161726]/70 backdrop-blur-md border border-white/10 rounded-xl p-3 font-mono text-[11px] flex justify-between items-center text-slate-300">
//                 <span>SECTOR // SECURE_HUB_01</span>
//                 <span className="text-cyan-400 font-bold">ONLINE</span>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Mobile Only Search Bar UI Stack (মোবাইলে গ্রিড যেন ভেঙে না যায়) */}
//       <div className="w-full mt-8 sm:hidden px-2">
//         <form onSubmit={handleSearchSubmit} className="bg-[#161726] border border-white/10 p-5 rounded-2xl space-y-4">
//           <Input label="Location" placeholder="Where to?" size="sm" variant="bordered" classNames={{inputWrapper: "border-white/10 bg-[#0d0e16]"}} />
//           <Select label="Property Type" size="sm" variant="bordered" placeholder="Select Type" classNames={{trigger: "border-white/10 bg-[#0d0e16]"}}>
//             <SelectItem key="apt">Apartment</SelectItem>
//             <SelectItem key="pent">Penthouse</SelectItem>
//           </Select>
//           <div className="grid grid-cols-2 gap-3">
//             <Input label="Min Price" type="number" placeholder="0" size="sm" variant="bordered" classNames={{inputWrapper: "border-white/10 bg-[#0d0e16]"}} />
//             <Input label="Max Price" type="number" placeholder="9999" size="sm" variant="bordered" classNames={{inputWrapper: "border-white/10 bg-[#0d0e16]"}} />
//           </div>
//           <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold text-xs rounded-xl h-10">
//             Search Properties
//           </Button>
//         </form>
//       </div>

//     </section>
//   );
// };

// export default HomeBanner;