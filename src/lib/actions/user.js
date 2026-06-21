"use server"

import { headers } from "next/headers"
import { auth } from "../auth"
import { revalidatePath } from "next/cache";


export const updateUsersRole = async (userId, role) =>{
    const data = await auth.api.setRole({
        body:{
            userId: userId,
            role: role
        },
        headers: await headers()
    });
    revalidatePath("/dashboard/admin/all-users")
    return data
}