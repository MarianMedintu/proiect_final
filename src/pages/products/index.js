import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProductList } from "./product-list";
import { ProductDetails } from "./product-details";


export function Products() {
    return (
        <div style={{display: 'flex'}}>
            <div style={{padding: '2rem', margin: '2rem', border: '1px solid black'}}>
                Favorite product list
            </div>
            <Routes>
                <Route path={'/'} element={<ProductList />} />
                <Route path={'/:productName-id-:productId'} element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
