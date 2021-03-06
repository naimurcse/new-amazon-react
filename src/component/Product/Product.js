import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import Button from '@restart/ui/esm/Button';
import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";
import starReview from "../../images/star.png"

const Product = (props) => {
    // console.log(props);
    const selectedProduct = props.selectedProduct;


    const {name,img,category,seller,price,shipping,stock,star, key} = props.product;
    let feedback = '';
    for (let i = 0; i < star; i++) {
        feedback = feedback + '*';
        
    }

    return (
        <div className="product-style">
            <Row>
                <Col md={3}>
                    <img src={img} alt={category} />
                </Col>
                <Col className="d-flex flex-column justify-content-between">
                    <h5><Link to={"/product/"+key}>{name}</Link></h5>
                    <div>
                        <p>{seller}</p>
                        <Row>
                            <Col>
                                <h6>Price: ${price}</h6>
                            </Col>
                            <Col>
                                <h6>Shipping: ${shipping}</h6>
                            </Col>
                            <Col>
                                <h6>Feedback: <strong>{star}</strong> out of 5 </h6>
                            </Col>
                        </Row>
                        <p>Only <strong>{stock}</strong> items left</p>
                    </div>
                    <div>
                        {
                            props.showAddToCart && <Button onClick={()=>selectedProduct(props.product)}  variant="warning"><FontAwesomeIcon icon={faShoppingCart} style={{marginRight:'10px'}}/>Add to Card</Button>
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Product;