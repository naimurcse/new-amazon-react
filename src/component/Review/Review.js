import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import "./Review.css";

const Review = () => {

    const [cart, setCart] = useState()
    useEffect(() => {

        const saveCart = getDatabaseCart()
        console.log(saveCart);
        // setCart(saveCart);
    },[])

    // console.log(cart);
    // const {name,img,category,seller,price,shipping,stock,star, key} = cart;
    
    return (
        <div>
        </div>
    );
};

export default Review;