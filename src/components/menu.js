import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import './menu.scss'
import {UserInfo} from "../pages/login/login";


export function Menu({cart}) {
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
        <div className={'header-bar'}>
            <div className={'cart'}>
                <button className={`cart-toggle ${showCart ? "visible" : ""}`}
                        aria-controls={'cart-nav'}
                        onClick={toggleCart}
                >
                    <span></span>

                </button>
                <nav onClick={toggleCart} id={'cart-nav'} className={`cart-nav ${showCart ? "visible" : ""}`}
                >
                    <NavLink to="/cart">Cart ({cart.length})</NavLink>
                    <ul className={"cart-products"}>
                        {cart.map(({id, name, slug}) => (
                            <li className={'cart-container'} key={id}>
                                <h3><NavLink to={`/products/${slug}-id-${id}`}> {name} </NavLink></h3>
                            </li>))}
                    </ul>
                </nav>
            </div>
            <div className={"menu"}>
                <button className={`mobile-nav-toggle ${showMenu ? "visible" : ""}`}
                        aria-controls={'primary-nav'}
                        onClick={toggleMenu}
                >
                    <span></span>
                </button>
                <nav onClick={toggleMenu} id={'primary-nav'} className={`primary-nav ${showMenu ? "visible" : ""}`}
                >
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/about/us"> About us</NavLink>
                    <NavLink to="/contact-us"> Contact</NavLink>
                    <NavLink to="/products"> Products </NavLink>
                    <NavLink to="/login-page"> Login </NavLink>
                    {currenUserInfo.isAdmin && (
                        <NavLink to="/admin/add-product"> Add Product </NavLink>
                    )}
                </nav>
            </div>
        </div>
    )
}
