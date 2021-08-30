
import React from 'react';
import "./MainManu.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainManu = () => {
    return (
        <>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/review">Order Review</Nav.Link>
            <Nav.Link href="/inventory">Manage Inventory</Nav.Link>
            {/* <a to="/"><Nav.Link>Home</Nav.Link></a>
            <a to="/shop"><Nav.Link>Products</Nav.Link></a>
            <a to="/review"><Nav.Link>Order Review</Nav.Link></a> */}
        </>

    );
};

export default MainManu;