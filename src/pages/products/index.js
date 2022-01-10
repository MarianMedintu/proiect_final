import React from 'react';
import {Route, Routes} from "react-router-dom";
import {ProductList} from "./product-list";
import {ProductDetails} from "./product-details";


export function Products({onAddToCart}) {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<ProductList onAddToCart={onAddToCart}/>}/>
                <Route path={'/:productName-id-:productId'} element={<ProductDetails onAddToCart={onAddToCart}/>}/>
            </Routes>
        </>
    )
}
