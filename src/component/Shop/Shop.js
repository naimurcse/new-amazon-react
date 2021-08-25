import React from 'react';
import {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import Order from '../Order/Order';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {


    const first10 = fakeData.slice(0,10);
    const [count, setCount] = useState(first10);


    // console.log(count);

    useEffect(() => {},[])

    return (
        <Container fluid>
            <Row>
                <Col md={9}>

                    {
                        count.map(product => <Product product={product}></Product>)
                    }
                </Col>
                <Col style={{background:"#e2e2e2"}}>
                    <Order></Order>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;