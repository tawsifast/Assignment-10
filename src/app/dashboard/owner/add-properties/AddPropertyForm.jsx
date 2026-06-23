"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import toast from "react-hot-toast";
import { createProperty } from "@/lib/actions/property";

export default function AddPropertyForm({ owner }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries());

    const propertyData = {
      title: rawData.title,
      description: rawData.description,
      location: rawData.location,
      propertyType: rawData.propertyType,
      price: Number(rawData.price),
      rentType: rawData.rentType,
      bedrooms: Number(rawData.bedrooms),
      bathrooms: Number(rawData.bathrooms),
      propertySize: rawData.propertySize,
      amenities: rawData.amenities ? rawData.amenities.split(",").map(item => item.trim()) : [],
      images: rawData.imageUrls,
      extraFeatures: rawData.extraFeatures,
      status: "Pending",
      ownerId: owner?.id,
      ownerEmail: owner?.email,
      ownerLogo: owner?.image,
    };

    const res = await createProperty(propertyData);
    if (res?.insertedId) {
      toast.success("Property posted successfully");
    }
  };

  // ইনপুট ফিল্ড ও ড্রপডাউনের জন্য গ্লোবাল লাইটার গ্লাস স্টাইল
  const inputContainerStyles = "[&_input]:bg-[#1a1a26] [&_input]:text-white [&_input]:border-white/10 [&_input]:rounded-xl [&_label]:text-slate-200 [&_label]:font-semibold [&_label]:text-xs [&_label]:mb-1.5 [&_textarea]:bg-[#1a1a26] [&_textarea]:text-white [&_textarea]:border-white/10 [&_textarea]:rounded-xl focus-within:[&_input]:border-cyan-400/50 focus-within:[&_textarea]:border-purple-500/50 transition-all";

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-[#12121a] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
      {/* Background Subtle Cyber Glow Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <Form className="w-full flex flex-col gap-4 text-left relative z-10" onSubmit={onSubmit}>
        <Fieldset className="w-full space-y-6">
          <div>
            <Fieldset.Legend className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Listing Parameters
            </Fieldset.Legend>
            <Description className="text-slate-400 text-xs font-medium mt-1">
              Fill up the required fields to map your asset onto the client registry.
            </Description>
          </div>

          <FieldGroup className="flex flex-col gap-5 mt-4">
            
            {/* 1. Property Title & Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField isRequired name="title" className={inputContainerStyles}>
                <Label>Property Title</Label>
                <Input placeholder="Luxury 3BR Apartment in Gulshan" />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>

              <TextField isRequired name="location" className={inputContainerStyles}>
                <Label>Location / Address</Label>
                <Input placeholder="Road 12, Gulshan 2, Dhaka" />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>
            </div>

            {/* 2. Description */}
            <TextField isRequired name="description" className={inputContainerStyles}>
              <Label>Description</Label>
              <TextArea placeholder="Describe the beautiful features of your property..." rows={4} />
              <FieldError className="text-xs text-rose-400 mt-1" />
            </TextField>

            {/* 3. Property Type, Rent Price & Rent Type */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Property Type */}
              <Select name="propertyType" isRequired placeholder="Select Type" className={inputContainerStyles}>
                <Label>Property Type</Label>
                <Select.Trigger className="bg-[#1a1a26] text-white border-white/10 rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-[#12121a] border border-white/10 text-white rounded-xl">
                  <ListBox className="p-1">
                    {["Apartment", "Duplex Villa", "Studio Flat", "Commercial Space"].map((type) => (
                      <ListBox.Item key={type} id={type} textValue={type} className="rounded-lg text-slate-200 hover:bg-white/5 hover:text-white cursor-pointer px-3 py-2 text-xs">
                        {type}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Rent Price */}
              <TextField isRequired name="price" type="number" className={inputContainerStyles}>
                <Label>Rent Price ($)</Label>
                <Input placeholder="550" />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>

              {/* Rent Type */}
              <Select name="rentType" isRequired placeholder="Select Period" defaultValue="Monthly" className={inputContainerStyles}>
                <Label>Rent Type</Label>
                <Select.Trigger className="bg-[#1a1a26] text-white border-white/10 rounded-xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover className="bg-[#12121a] border border-white/10 text-white rounded-xl">
                  <ListBox className="p-1">
                    {["Monthly", "Weekly", "Daily"].map((period) => (
                      <ListBox.Item key={period} id={period} textValue={period} className="rounded-lg text-slate-200 hover:bg-white/5 hover:text-white cursor-pointer px-3 py-2 text-xs">
                        {period}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* 4. Specifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <TextField isRequired name="bedrooms" type="number" className={inputContainerStyles}>
                <Label>Bedrooms</Label>
                <Input placeholder="3" min={0} />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>

              <TextField isRequired name="bathrooms" type="number" className={inputContainerStyles}>
                <Label>Bathrooms</Label>
                <Input placeholder="2" min={0} />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>

              <TextField isRequired name="propertySize" className={inputContainerStyles}>
                <Label>Property Size</Label>
                <Input placeholder="1450 sqft" />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>
            </div>

            {/* 5. Amenities & Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField name="amenities" className={inputContainerStyles}>
                <Label>Amenities (Comma Separated)</Label>
                <Input placeholder="WiFi, Parking, Lift, Generator" />
                <Description className="text-slate-400 text-[11px] mt-1">Optional specifications</Description>
              </TextField>

              <TextField isRequired name="imageUrls" className={inputContainerStyles}>
                <Label>Property Image URLs (Comma Separated)</Label>
                <Input placeholder="https://img1.com, https://img2.com" />
                <FieldError className="text-xs text-rose-400 mt-1" />
              </TextField>
            </div>

            {/* 6. Extra Features */}
            <TextField name="extraFeatures" className={inputContainerStyles}>
              <Label>Extra Features / Notes</Label>
              <Input placeholder="Pet friendly, South facing, 2 balconies" />
            </TextField>

            <hr className="border-white/10 my-2 w-full" />

            {/* 7. Owner Information */}
            <div>
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Owner Registry Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <TextField isRequired name="ownerName" className={inputContainerStyles}>
                  <Label>Owner Name</Label>
                  <Input placeholder="John Doe" />
                  <FieldError className="text-xs text-rose-400 mt-1" />
                </TextField>

                <TextField isRequired name="ownerEmail" type="email" className={inputContainerStyles}>
                  <Label>Contact Email</Label>
                  <Input placeholder="johndoe@example.com" />
                  <FieldError className="text-xs text-rose-400 mt-1" />
                </TextField>

                <TextField isRequired name="ownerPhone" className={inputContainerStyles}>
                  <Label>Contact Phone</Label>
                  <Input placeholder="+88017XXXXXXXX" />
                  <FieldError className="text-xs text-rose-400 mt-1" />
                </TextField>
              </div>
            </div>

          </FieldGroup>

          {/* Actions */}
          <Fieldset.Actions className="flex gap-3 pt-4 justify-end">
            <Button type="reset" variant="secondary" className="cursor-pointer rounded-xl font-medium text-xs border border-white/10 bg-transparent text-slate-300 hover:bg-white/5 px-5 h-10">
              Clear Form
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs rounded-xl px-6 h-10 cursor-pointer shadow-lg shadow-purple-500/10 hover:shadow-cyan-400/20 hover:scale-[1.01] transition-all duration-300">
              <PlusCircle size={15} className="mr-1.5" />
              Publish Listing
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}