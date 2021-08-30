import React from 'react';
import { Table } from 'react-bootstrap';
import "./Order.css";

const Order = (props) => {
    const selectedProduct = props.addProduct;
    console.log(selectedProduct);

    const totalPrice = selectedProduct.reduce((sum, product) =>sum + product.price, 0);
    const totalShipping = selectedProduct.reduce((sum, product) =>sum + product.shipping, 0);
    const tax = (totalPrice + totalShipping) * 0.05;
    const grandTotal = (totalPrice + totalShipping + tax);
    return (
        <div className="order-container text-center" >
            <h4>Order Summery</h4>
            <h6>Items Ordered: {selectedProduct.length}</h6>
            <Table responsive="md" className="table-style">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Total Price:</td>
                        <td>{totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge:</td>
                        <td>{totalShipping.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>TAX:</td>
                        <td>{tax.toFixed(2)}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr style={{fontWeight: 'bold', color: 'orangered', fontSize:"18px", paddingTop:'25px'}}>
                        <td>   Grand Total:</td>
                        <td>{grandTotal.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Order;