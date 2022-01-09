import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router";
import { API } from "../../utils/constants";
import { UserInfo } from "../login/login";

export function ProductDetails() {
    const {productId} = useParams();
    const currenUserInfo = useContext(UserInfo);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        fetch(`${API}/products/${productId}`)
            .then((r) => r.json())
            .then((details) => setProductDetails(details))
    }, [productId])

    if (productDetails === null) {
        return (
            <div>
                Loading product details...
            </div>
        )
    }

    const {name,price,weight,url,slug,description} = productDetails;

    return (
        <div>
            <h1>{name}</h1>
            <img src={url} alt={`${slug}.img`}/>
            <ul>
                <li>
                    Price: {price} lei
                </li>
                <li>
                    Weight: {weight} g
                </li>
                <li>
                    Description: {description}
                </li>
                {currenUserInfo.id && (
                    <li>
                        <button>Buy</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
