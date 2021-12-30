import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import './menu.scss'
import { UserInfo } from "./login";

export function Menu() {
    const currenUserInfo = useContext(UserInfo);

    return (
        <nav className={"Menu"}>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/contact-us"> Contact</NavLink>
            <NavLink to="/produse"> Products </NavLink>
            {currenUserInfo.isAdmin && (
                <NavLink to="/admin/add-product"> Add Product </NavLink>
            )}
        </nav>
    )
}
