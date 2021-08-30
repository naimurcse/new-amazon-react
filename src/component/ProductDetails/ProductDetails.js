import React from 'react';
// import { useParams } from 'react-router';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import "./ProductDetails.css";


const ProductDetails = () => {

    let {productKey} = useParams();

    const product = fakeData.find(item => item.key === productKey);
    const {name,img,category,seller,price,shipping,stock,star, key} = product;    

    return (
        <div>
            <h2>{name}</h2>
            <Product 
                product={product}
                showAddToCart ={false}
                ></Product>

        </div>
    );
};

export default ProductDetails;