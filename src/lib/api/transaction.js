import { protectedFetch, serverFetch } from "../core/server"


export const getAllTransactions = async (transactionData) =>{
    return serverFetch("/transactions", transactionData)
}