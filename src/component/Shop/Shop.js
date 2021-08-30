import React from 'react';
import {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Header from '../Header/Header';
import Order from '../Order/Order';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {


    const first10 = fakeData.slice(0,10);
    const [count, setCount] = useState(first10);

    const [addProduct, setAddProduct] = useState([]);

    const selectedProduct = (product) => {
        const newProducts = [...addProduct, product]
        setAddProduct(newProducts);

        const sameProduct = newProducts.filter(pd => pd.key === product.key);
        let count = sameProduct.length;
        addToDatabaseCart(product.key, count)
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
                            key={product.key}
                            showAddToCart ={true}
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