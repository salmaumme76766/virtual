import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Card, Col, Row } from "react-bootstrap";

const ProductCard = ({ product }) => {
    console.log(product);

    const [cartItems, setCartItems] = useState([]);

    const loggeduser = sessionStorage.getItem("user");
    useEffect(() => {
        getCartByUser()
    })

    function getCartByUser() {
        axios
            .get(`http://localhost:8080/Cart/GetCartByUser/${loggeduser}`)
            .then((res) => {
                setCartItems(res.data)
            })
            .catch((err) => {
                console.log(err)
            });

    }

    function DeleteItem(id) {
        axios
            .delete(` http://localhost:8080/Cart/DeleteItem//${loggeduser}/${id}`)
            .then((res) => {
                toast.success(res.data)
                getCartByUser();
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.response.data)
            });
    }

    function addToCart(id) {
        axios
            .post(`http://localhost:8080/Cart/AddUpdateCart/${loggeduser}/${id}`)
            .then((res) => {
                toast.success(res.data);
                getCartByUser();
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response.data)
            });
    }

    function DecreaseProduct(id) {
        axios
            .put(` http://localhost:8080/Cart/DecreaseProduct/${loggeduser}/${id}`)
            .then((res) => {
                toast.success(res.data)
                getCartByUser();
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.response.data)
            });
    }
    return (
        <>
            <Card className="my-2 d-flex shadow">
                <Card.Body className="d-flex text-capitalize">
                    <Row className="w-100">
                        <Col md={3} className="d-flex justify-content-center">
                            <Card.Img
                                variant="left"
                                src={product.products?.image}
                                height={120}
                                width={150}
                                style={{ objectFit: "cover" }}
                            />
                        </Col>
                        <Col md={9}>
                            <div className="d-flex flex-column align-items-start justify-content-center w-100">
                                <Card.Title className="text-primary">{product.name}</Card.Title>
                                <Card.Text>
                                    {product.quantity} X {" ₹"}
                                    {product.products?.price}
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <span>
                                        Plant: <b>{product.products?.name}</b>
                                    </span>
                                    <Card.Text className="d-flex gap-2">
                                        <AiFillMinusCircle
                                            role="button"
                                            size="1.5rem"
                                            className="text-primary"
                                            onClick={() => DecreaseProduct(product.products?.id)}
                                        />
                                        <span>{product.quantity}</span>
                                        <AiFillPlusCircle
                                            role="button"
                                            size="1.5rem"
                                            className="text-primary"
                                            onClick={() => addToCart(product.products?.id)}
                                        />
                                    </Card.Text>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between">
                        <AiFillDelete
                            role="button"
                            size="1.5rem"
                            color="red"
                            onClick={() => DeleteItem(product.products?.id)}
                        />
                        <div className="fw-bold">
                            <span>Subtotal : ₹</span>
                            <span>{product.quantity * product.products?.price}</span>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </>

    )
}

export default ProductCard;
