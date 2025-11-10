/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProductCard from '@/app/components/products/ProductCard';
import SearchProduct from '@/app/components/products/SearchProduct';
import { SelectCom } from '@/app/components/SelectCom';
import PageSection from '@/app/sharedComponents/PageSection';
import { useProducts } from '@/hooks/useProducts';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const AllProducts = () => {

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [orderBy, setOrderBy] = useState<"asc" | "desc">("asc");

  const { isPending, data, error } = useProducts({
    page,
    limit: 2,
    searchTerm,
    sortBy,
    orderBy,
  });

  const products = data?.data || []

  console.log("from products page",products)

    return (
        <div>
            <PageSection activeLink="Products" />
            <div className="min-h-screen  py-12 px-4 bg-gray-950 text-white">
                
                <div>
                    
                    <div className="container mx-auto bg-gray-950">
                        <div className='flex justify-between items-center py-6'>
                            <div>
                                <SearchProduct onSearch={setSearchTerm} />
                            </div>
                            <div className='flex gap-2 items-center'>F: <SelectCom /> </div>
                        </div>
                        {
                            products && products?.length > 0 ? (
                                <div className='grid grid-cols-3 gap-5'>
                                    {
                                        products.map((product:any) => <ProductCard key={product.id} product={product} />)
                                    }
                                </div>
                            ):(
                                <p>Not found</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;