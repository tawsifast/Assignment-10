

import { protectedFetch, serverFetch } from "../core/server";


export const getFavouriteProperty = async(email) =>{
    return protectedFetch(`/favourites/${email}`)
};

export const deleteFavourite = async(id) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/favourites/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
        },
    })
    return res.json();
}