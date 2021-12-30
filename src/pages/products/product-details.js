import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router";
import { API } from "../../utils/constants";
import { UserInfo } from "../../components/login";

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

    const {name, color, weight} = productDetails;

    return (
        <div>
            <h1>{name}</h1>

            <ul>
                <li>
                    Color: {color}
                </li>
                <li>
                    Weight: {weight}
                </li>
                {currenUserInfo.id && (
                    <li>
                        <button>Cumpara</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
