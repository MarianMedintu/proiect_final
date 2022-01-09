import React from 'react';
import './home.scss'
import { API } from "../utils/constants";
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
                    <button>Shop now!</button>
                </div>
            </div>
            <ProductList id={1}></ProductList>
            <div className={'bestsellers container'}>
                {/*<div className={'product-container'}>*/}
                {/*    <img src={url} key={1} alt={`${slug}.img`}/>*/}
                {/*    <h3 key={1}><NavLink to={`/products/${slug}-id-${1}`}> {name} </NavLink></h3>*/}
                {/*    <h4 key={1}>{price} lei</h4>*/}
                {/*    <button>Add to cart</button>*/}
                {/*</div>*/}
                <div className={'bestseller-article'}>
                    <img src={'https://cdn.notinoimg.com/detail_thumb/notino/8059300536728_01/notino-home-collection-feelin-peaceful-cherry-blossom-scented-candle-lumanare-parfumata-220-g_.jpg'}/>
                    <h3>Candle</h3>
                    <h4>30 lei</h4>
                    <button>Add to cart</button>
                </div>
                <div className={'bestseller-article'}></div>
                <div className={'bestseller-article'}></div>
            </div>
        </div>
    )
}
