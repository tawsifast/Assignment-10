import { serverMutation } from "../core/server"

export const createProperty = async(newPropertyData) =>{
    return serverMutation("/properties", newPropertyData)
}

export const updatedProperty = async (propertyId, updatedPropertyData) => {
  return serverMutation(`/my/properties/${propertyId}`, updatedPropertyData, "PATCH");
};

export const updatedPropertyByAdmin = async (propertyId, updatedPropertyData) => {
  return serverMutation(`/adminProperty/${propertyId}`, updatedPropertyData, "PATCH");
};