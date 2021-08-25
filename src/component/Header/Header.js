import logo from '../../images/logo.png';
import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, FormControl, Form, Button } from 'react-bootstrap';
import MainManu from '../MainManu/MainManu';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className="nav-border">
                <Container fluid className="d-flex">
                    <Navbar.Brand href="/" className="navbar-brand logo-area">
                        <img src={logo} alt="logo"></img>
                    </Navbar.Brand>
                    <Nav>
                        <MainManu></MainManu>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="warning"><FontAwesomeIcon icon={faSearch} /></Button>
                    </Form>    

                    <span>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <spen style={{fontSize:'18px', fontWeight:'bold', paddingLeft:'5px'}}>0</spen>
                    </span>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;