import React, {useContext} from 'react';
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
    return (
        <>
            <button className={'mobile-nav-toggle'}
                    aria-controls={'primary-nav'}
                    aria-expanded={false}>
                <span></span>
            </button>
            <nav id={'primary-nav'} className={"primary-nav"}
            data-visible={false}>
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/contact-us"> Contact</NavLink>
                <NavLink to="/products"> Products </NavLink>
                <NavLink to="/login-page"> Login </NavLink>
                {currenUserInfo.isAdmin && (
                    <NavLink to="/admin/add-product"> Add Product </NavLink>
                )}
            </nav>
        </>
    )
}
