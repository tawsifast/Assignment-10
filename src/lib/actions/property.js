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

export const deletePropertyByAdmin = async(selectedPropertyId) =>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allProperties/${selectedPropertyId}`,{
        method: "DELETE",
        headers: {
            "Content-type":"application/json",
        },
    })
    return res.json();
}