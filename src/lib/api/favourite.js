import { serverFetch } from "../core/server";


export const getFavouriteProperty = async(email) =>{
    return serverFetch(`/favourites/${email}`)
};