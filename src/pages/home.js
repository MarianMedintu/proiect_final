import React from 'react';
import './home.scss'
import {API} from "../utils/constants";
import Home_First from '../images/home/Home_First_pic.jpeg'
import {NavLink} from "react-router-dom";
import {ProductList} from "./products/product-list";

export function Home() {

    return (
        <div className={'home'}>
            <div className={'background-image'} style={{backgroundImage: "url(" + Home_First + ")"}}>
                <div className={'container'}>
                    <h2>Mind & Body</h2>
                    <p>Take a fragrance-filled journey into wellness.</p>
                    <NavLink to="/products">
                        <button>Shop now!</button>
                    </NavLink>
                </div>
            </div>
            <div className={'bestsellers container'}>
                <h2>Bestsellers</h2>
                <ProductList limit={4}> </ProductList>
            </div>
        </div>
    )
}
