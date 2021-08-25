
import React from 'react';
import "./MainManu.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainManu = () => {
    return (
        <>
            {/* <Nav.Link>Home</Nav.Link>
            <Nav.Link>Products</Nav.Link>
            <Nav.Link>Order Review</Nav.Link> */}
            <a to="/"><Nav.Link>Home</Nav.Link></a>
            <a to="/shop"><Nav.Link>Products</Nav.Link></a>
            <a to="/review"><Nav.Link>Order Review</Nav.Link></a>
        </>

    );
};

export default MainManu;