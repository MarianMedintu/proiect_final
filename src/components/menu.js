import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import './menu.scss'
import {UserInfo} from "./login";

// const primaryNav = document.querySelector('.primary-nav');
// const navToggle = document.querySelector('.mobile-nav-toggle');
// navToggle.addEventListener('click', () =>{
// const visibility = primaryNav.getAttribute('data-visible')
//     if(visibility === 'false') {
//         primaryNav.setAttribute('data-visible',true);
//     } else if (visibility === 'true') {
//         primaryNav.setAttribute('data-visible', false);
//     }
// })

export function Menu() {
    const currenUserInfo = useContext(UserInfo);
    const [showMenu, setShowMenu] = useState(false);
    const [showCart, setShowCart] = useState(false);

    function toggleMenu() {
        setShowMenu(state => !state)
        if (showCart === true) {
        toggleCart()
        }
    }

    function toggleCart() {
        setShowCart(state => !state)
        if (showMenu === true) {
            toggleMenu()
        }
    }

    return (
        <>
            <div>
                <button className={`mobile-nav-toggle ${showMenu ? "visible" : ""}`}
                        aria-controls={'primary-nav'}
                        onClick={toggleMenu}
                >
                    <span></span>
                </button>
                <nav onClick={toggleMenu} id={'primary-nav'} className={`primary-nav ${showMenu ? "visible" : ""}`}
                >
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/contact-us"> Contact</NavLink>
                    <NavLink to="/products"> Products </NavLink>
                    <NavLink to="/login-page"> Login </NavLink>
                    {currenUserInfo.isAdmin && (
                        <NavLink to="/admin/add-product"> Add Product </NavLink>
                    )}
                </nav>
            </div>

            <div>
                <button className={`cart-toggle ${showCart ? "visible" : ""}`}
                        aria-controls={'cart-nav'}
                        onClick={toggleCart}
                >
                    <span></span>
                </button>
                <nav onClick={toggleCart} id={'cart-nav'} className={`cart-nav ${showCart ? "visible" : ""}`}
                >
                    <NavLink to="/cart">Show Cart</NavLink>
                    <span>Cart icon</span>
                </nav>
            </div>
        </>
    )
}
