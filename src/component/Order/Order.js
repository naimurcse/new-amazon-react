import React from 'react';
import { Table } from 'react-bootstrap';
import "./Order.css";

const Order = (props) => {
    const selectedProduct = props.addProduct;
    console.log(selectedProduct);

    const totalPrice = selectedProduct.reduce((sum, product) =>sum + product.price, 0);
    return (
        <div className="order-container text-center" >
            <h4>Order Summery</h4>
            <h6>Items Ordered: {selectedProduct.length}</h6>
            <Table responsive="md" className="table-style">
                <tr>
                    <td>Total Price:</td>
                    <td>{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Shipping Charge:</td>
                    <td>{totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>TAX:</td>
                    <td>52</td>
                </tr>
            </Table>
        </div>
    );
};

export default Order;