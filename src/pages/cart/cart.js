import React, {createContext, useContext, useEffect, useState} from 'react';
import './cart.scss'
import '../products/product-list.scss'
import '../../components/button.scss'
import {NavLink} from "react-router-dom";

export function Cart({cart}) {
    return (
        <div className={'cart_page'}>
            <h2>Products in cart:</h2>
            <ul className={"cart-products"}>
                {cart.map(({id, name, slug, url, price}) => (
                    <li className={'cart_page_container'} key={id}>
                        <h3><NavLink to={`/products/${slug}-id-${id}`}> {name} </NavLink></h3>
                        <h4>{price} lei</h4>
                    </li>))}
            </ul>
            <br/>
            <h3>Total: 220 lei</h3>
        </div>
    )
}