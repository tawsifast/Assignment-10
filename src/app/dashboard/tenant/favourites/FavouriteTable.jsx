"use client";

import React, { useState } from 'react';
import { Table, Button } from "@heroui/react";
import { Trash2, Heart, MapPin, Bed, Bath, DollarSign, Building } from "lucide-react";
import toast from "react-hot-toast";

const FavouriteTable = ({ initialFavorites }) => {
  const [favorites, setFavorites] = useState(initialFavorites || []);

  const handleRemoveFavorite = async (id, title) => {
    try {
      // Add your backend delete action call here:
      // await deleteFavouriteProperty(id);
      
      setFavorites(prev => prev.filter(item => item._id !== id || item.id !== id));
      toast.success(`Removed "${title}" from favorites`);
    } catch (error) {
      toast.error("Failed to remove item");
    }
  };

  return (
    <div className="bg-[#09090f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sm text-slate-500 font-mono">No favorite properties found.</p>
        </div>
      ) : (
        <Table aria-label="Favorites Management Grid">
          <Table.ScrollContainer>
            <Table.Content className="min-w-[800px]">
              <Table.Header>
                <Table.Column isRowHeader className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-6 border-b border-white/5">Property</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Type</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Location</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Specs</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-4 border-b border-white/5">Rent Price</Table.Column>
                <Table.Column className="bg-white/[0.02] text-slate-400 font-semibold text-xs py-4 px-6 text-right border-b border-white/5">Actions</Table.Column>
              </Table.Header>
              <Table.Body>
                {favorites.map((item) => (
                  <Table.Row key={item._id || item.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                    
                    {/* Title Cell */}
                    <Table.Cell className="py-4 px-6">
                      <span className="font-semibold text-slate-200 tracking-wide block">
                        {item.title}
                      </span>
                    </Table.Cell>

                    {/* Type Cell */}
                    <Table.Cell className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                        <Building className="size-3" />
                        {item.type}
                      </span>
                    </Table.Cell>

                    {/* Location Cell */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm text-slate-300 flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </Table.Cell>

                    {/* Rooms/Baths Specs Cell */}
                    <Table.Cell className="py-4 px-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Bed className="size-3.5 text-slate-500" /> {item.bedroom} Bed
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="size-3.5 text-slate-500" /> {item.bathroom} Bath
                        </span>
                      </div>
                    </Table.Cell>

                    {/* Pricing Cell */}
                    <Table.Cell className="py-4 px-4">
                      <span className="text-sm font-bold font-mono text-emerald-400 flex items-center">
                        <DollarSign className="size-3.5 shrink-0" />
                        {item.rentPrice?.toLocaleString()}/mo
                      </span>
                    </Table.Cell>

                    {/* Remove Action Cell */}
                    <Table.Cell className="py-4 px-6 text-right">
                      <Button
                        size="sm"
                        onPress={() => handleRemoveFavorite(item._id || item.id, item.title)}
                        className="bg-rose-500/5 hover:bg-rose-500/10 text-rose-400 border border-rose-500/10 hover:border-rose-500/20 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <Trash2 className="size-3.5" />
                        Remove
                      </Button>
                    </Table.Cell>

                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
};

export default FavouriteTable;