import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { API } from "../../utils/constants";

export function ProductList() {
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
        <div>
            <h1>Product list</h1>
            <ul>
                {productList.map(({id, name, slug}) => (
                    <li key={id}><NavLink to={`/produse/${slug}-id-${id}`}> {name} </NavLink></li>
                ))}
            </ul>
        </div>
    )
}
