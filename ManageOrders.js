import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TOAST_PROP } from "../App";
import OrderDetailsModal from "./OrderDetailsModal";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    const [show, setShow] = useState(false);

    const loadAllOrders = () => {
        axios
            .get(`http://localhost:8080/Orders/GetAllOrders`)
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAllOrders();
    }, []);

    const toggleModal = (order) => {
        setShow(!show);
        setSingleOrder(order);
    };

    const updateOrder = (id, status) => {
        const data = {
            status: status,
        };

        axios
            .put(`http://localhost:8080/Orders/UpdateStatus/${id}`, data)
            .then((res) => {
                toast.success(res.data, TOAST_PROP);
                loadAllOrders();
            })
            .catch((err) => {
                toast.error(err.response.data);
            });
    };

    return (
        <Container>
            <h2 className="text-center my-3 text-primary"> Manage Orders</h2>
            <OrderDetailsModal show={show} toggle={toggleModal} data={singleOrder} />
            <Table striped bordered hover>
                <thead className="text-center">
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Ratings</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td className="fw-semibold align-middle">
                                <Link onClick={() => toggleModal(order)}>{order.id}</Link>
                            </td>
                            <td className="align-middle text-capitalize">{order?.user.name}</td>
                            <td>
                                {order.products.map((item, index) => (
                                    <p key={index}>{item.name}</p>
                                ))}
                            </td>
                            <td className="align-middle">₹{order.totalPrice}</td>
                            <td className={`align-middle ${order.status === "cancelled" ? "text-danger" : ""}`}>
                                {order.status}
                            </td>
                            <td className="align-middle">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <FaStar
                                        key={rating}
                                        size={24}
                                        className={rating <= (order.rating || 0) ? "text-warning" : "text-secondary"}
                                        style={{ cursor: "pointer" }}
                                    />
                                ))}
                            </td>
                            <td className="align-middle">
                                {order.status === "placed" && (
                                    <Button variant="success" size="sm" onClick={() => updateOrder(order.id, "dispatched")}>
                                        Dispatch
                                    </Button>
                                )}
                                {order.status === "dispatched" && (
                                    <Button variant="success" size="sm" onClick={() => updateOrder(order.id, "delivered")}>
                                        Delivered
                                    </Button>
                                )}
                                {(order.status === "placed" || order.status === "dispatched") && (
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="ms-2"
                                        onClick={() => updateOrder(order.id, "cancelled")}
                                    >
                                        Cancel
                                    </Button>
                                )}
                                {order.status === "return requested" && (
                                    <Button variant="danger" size="sm" className="ms-2" onClick={() => updateOrder(order.id, "refunded")}>
                                        Refund
                                    </Button>
                                )}
                                {order.status === "return requested" && (
                                    <Button variant="danger" size="sm" className="ms-2" onClick={() => updateOrder(order.id, "request cancelled")}>
                                        Cancel Request
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageOrders;
