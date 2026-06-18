import { serverMutation } from "../core/server";


export const addFavorite = async (favoriteData) => {
  return serverMutation("/favourites", favoriteData);
};