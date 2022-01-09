import React, {createContext, useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {API} from "../../utils/constants";
import './product-list.scss'
import {anonymousUserInfo, UserInfo} from "../login/login";
import '../../components/button.scss'

export function ProductList({onAddToCart, limit}) {
    const currenUserInfo = useContext(UserInfo);

    function handleBuy(id) {
        const item = productList.find((product) => product.id === id)
        onAddToCart(item);
    }

    const [productList, setProductList] = useState(null)
    useEffect(() => {
        const URL = limit ? `${API}/products?_limit=${limit}` : `${API}/products`
        fetch(URL)
            .then((response) => response.json())
            .then((list) => setProductList(list))
    }, [])

    if (productList === null) {
        return (
            <div>
                Loading products...
            </div>
        )
    }
    return (
        <div className={'product-list'}>
            <ul className={"all-products"}>
                {productList.map(({id, name, slug, price, url}) => (
                    <div className={'product-container'} key={id}>
                        <img src={url} key={id} alt={`${slug}.img`}/>
                        <h3><NavLink to={`/products/${slug}-id-${id}`}> {name} </NavLink></h3>
                        <h4>{price} lei</h4>
                        {currenUserInfo.id && (
                            <button onClick={() => handleBuy(id)}>Add to cart</button>)}
                    </div>
                ))}
            </ul>
        </div>
    )
}
