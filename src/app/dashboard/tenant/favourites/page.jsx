import { getFavouriteProperty } from '@/lib/api/favourite';
import React from 'react';
import { Heart } from "lucide-react";
import FavouriteTable from './FavouriteTable';
import { getUserSession } from '@/lib/core/session';


const FavouritePage = async () => {
    const user = await getUserSession()
    const favouriteProperties = await getFavouriteProperty(user.email) || [];

    return (
        <div className="min-h-screen bg-[#030307] text-slate-100 p-6 sm:p-8 antialiased">
            <div className="max-w-6xl mx-auto space-y-6">
                
                {/* Header Sub-section Title */}
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                    <div className="p-2 bg-rose-500/10 text-rose-400 rounded-xl border border-rose-500/10">
                        <Heart className="size-5 fill-rose-400" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white">Saved Properties</h1>
                        <p className="text-xs text-slate-500 mt-0.5 uppercase tracking-wider font-mono">
                            Manage your bookmarked favorite real estate properties
                        </p>
                    </div>
                </div>

                {/* Feed fetched server data straight into the interactive client table component */}
                <FavouriteTable initialFavorites={favouriteProperties} />

            </div>
        </div>
    );
};

export default FavouritePage;