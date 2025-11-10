/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const ProductCard = ({ product }: { product: any }) => {
    return (
        <div className='space-y-3.5 p-14 border border-gray-800'>
            <div>
                <h2>{product?.name}</h2>
                <p>{product.description}</p>
            </div>
            <div className='flex justify-between'>
                <span>${product?.price}</span>
                <span>category:{product?.category?.name}</span>
            </div>
        </div>
    );
};

export default ProductCard;