"use server"



import { auth } from "../auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";


// export const updateUsersRole = async (userId, role) =>{
//     const data = await auth.api.setRole({
//         body:{
//             userId: userId,
//             role: role
//         },
//         headers: await headers()
//     });
//     revalidatePath("/dashboard/admin/all-users")
//     return data
// }

export const updateUsersRole = async (userId, role) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role }),
  });
  revalidatePath("/dashboard/admin/all-users");
  return res.json();
};