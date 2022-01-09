import React, {useContext, useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { API } from "../../utils/constants";
import './product-list.scss'
import {UserInfo} from "../login/login";
import '../../components/button.scss'


export function ProductList() {
    const currenUserInfo = useContext(UserInfo);
    const[cart, setCart] = useState([]);

    const addToCart = (productId) => {
        setCart([...cart, productId])
        console.log('addtocart', cart)
    }
    const [productList, setProductList] = useState(null)
    useEffect(() => {
        fetch(`${API}/products`)
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
            <h1>Product list</h1>
            <ul className={"all-products"}>
                {productList.map(({id, name, slug,price,url}) => (
                    <div className={'product-container'} key={id}>
                        <img src={url} key={id} alt={`${slug}.img`}/>
                        <h3><NavLink to={`/products/${slug}-id-${id}`}> {name} </NavLink></h3>
                        <h4>{price} lei</h4>
                        {/*<button onClick={() => addToCart(id)}>Add to cart</button>*/}
                        {currenUserInfo.id && (
                        <button onClick={() => addToCart(id)}>Add to cart</button> )}
                    </div>
                ))}
            </ul>
        </div>
    )
}
