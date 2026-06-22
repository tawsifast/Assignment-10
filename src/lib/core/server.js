"use server"

import { redirect } from "next/navigation";
import { authClient } from "../auth-client";
import { getUserToken } from "./session";


export const authHeader = async() =>{
    const token = await getUserToken();
    const header = {
        authorization : `Bearer ${token}`
    };
    return token ? header : {}
}

export const serverFetch = async(path) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`);
    return handleStatusCode(res)
}

export const protectedFetch = async(path) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
        {
            headers: await authHeader()
        }
    );
    return handleStatusCode(res);
}

export const serverMutation = async(path, data, method = "POST" ) =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,{
        method: method,
        headers: {
            "Content-type":"application/json",
            ...await authHeader()
        },
        body:JSON.stringify(data)
    })
    return handleStatusCode(res);
}

const handleStatusCode = res =>{
    if(res.status === 401){
        redirect("/unauthorized")
    } 
    else if(res.status === 403){
        redirect("/unauthorized")
    } 
    return res.json();
}