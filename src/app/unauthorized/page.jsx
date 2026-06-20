import React from 'react';
import Link from 'next/link';
import { ShieldX, Home, ArrowLeftRight } from 'lucide-react';

const UnauthorizedPage = () => {
    return (
        <div className="min-h-screen bg-[#030307] text-[#94a3b8] flex items-center justify-center p-6 antialiased selection:bg-rose-500/20 selection:text-rose-300">
            
            {/* Ambient Background Matrix Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.04),transparent_65%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-md w-full relative z-10 border border-white/[0.03] bg-[#09090f]/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center space-y-8">
                
                {/* Visual Identity Block */}
                <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full scale-75 animate-pulse" />
                    <div className="relative p-4 bg-[#0d0d16] border border-rose-500/20 text-rose-500 rounded-2xl shadow-inner">
                        <ShieldX className="size-10 stroke-[1.5]" />
                    </div>
                </div>

                {/* Typography Headers */}
                <div className="space-y-3">
                    <p className="text-[13px] font-mono tracking-[0.3em] text-rose-500/80 uppercase font-semibold">
                        Security Notice // 403 Access Denied
                    </p>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                        Restricted Access
                    </h1>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                        Your account credentials do not have clearance to view this directory node. Please use the secure routes below to safely return to authorized domains.
                    </p>
                </div>

                {/* Geometric Separator */}
                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white/5"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#0c0c14] px-3 text-[9px] font-mono tracking-widest text-slate-600">RESTRICTED_NODE</span>
                    </div>
                </div>

                {/* Pure Server-Side Safe Navigation Links */}
                <div className="grid grid-cols-1 gap-3">
                    <Link
                        href="/"
                        className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 text-[#030307] hover:bg-slate-200 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all shadow-md cursor-pointer"
                    >
                        <Home className="size-3.5" />
                        Go to Homepage
                    </Link>
                    
                    {/* <Link
                        href="/dashboard"
                        className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 border border-white/5 hover:border-white/10 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer"
                    >
                        <ArrowLeftRight className="size-3.5 text-slate-500" />
                        Return to Dashboard
                    </Link> */}
                </div>

                {/* System Diagnostics */}
                <div className="pt-2 font-mono text-[9px] text-slate-600 tracking-wider flex justify-between px-2">
                    <span>HOST: CRYPTO_VAULT</span>
                    <span>STATUS: SECURE</span>
                </div>

            </div>
        </div>
    );
};

export default UnauthorizedPage;