import React from 'react';
import {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Order from '../Order/Order';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {


    const first10 = fakeData.slice(0,10);
    const [count, setCount] = useState(first10);

    const [addProduct, setAddProduct] = useState([]);

    const selectedProduct = (props) =>{
        const newProduct = [...addProduct, props]
        setAddProduct(newProduct);
    }
    // console.log(addProduct);

    useEffect(() => {},[])

    return (
        <Container fluid>
            <Row>
                <Col md={9}>

                    {
                        count.map(product => <Product 
                            product={product}
                            selectedProduct={selectedProduct}
                            ></Product>)
                    }
                </Col>
                <Col style={{background:"#e2e2e2"}}>
                    <Order addProduct={addProduct}></Order>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;