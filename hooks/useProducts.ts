"use client"

import { fetchProducts } from "@/services/productApi"
import { useQuery } from "@tanstack/react-query"

export const useProducts = ({ page, limit, searchTerm = "", category = "", orderBy = "asc", sortBy="price" }
        :
        { page: number, limit: number, searchTerm?: string, category?: string, orderBy?: "asc" | "desc", sortBy?: string })=>{
    
    return useQuery({
        queryKey: ["products", page, limit, searchTerm, category, sortBy, orderBy],
        queryFn: ()=>
            fetchProducts({page, limit, searchTerm, category, sortBy, orderBy}),
           
        
    });
}