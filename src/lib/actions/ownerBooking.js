import { serverFetch, serverMutation } from "../core/server";


export const getOwnerBookingProperty = async(ownerEmail)=>{
    return serverFetch(`/owner/bookings?ownerEmail=${ownerEmail}`)
}

export const deleteOwnerBooking = async(id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/my/properties/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
        },
    })
    return res.json();
}

export const updateBooking = async(id, data)=>{
    return serverMutation(`/owner/bookings/${id}`, data, "PATCH")
}