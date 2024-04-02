import React from "react";
import { Card,Carousel } from "react-bootstrap";
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"

import Products from "./User/Products";

export default function HomeInfo() {
    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
             </Carousel.Item>
             <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
             </Carousel.Item>
              </Carousel>

              <Products/>
              <h2 className="text-center mt-4"> About Us</h2>
              <div className="container my-3">
                <Card.Body>
                    <Card.Title>Virtual Plant Store</Card.Title>
                    <Card.Text>
                        Store is an Indian online platform that sells plants,gardening supplies, and related products.
                        It was founded in 2014 with the air of making gardening accessible to everyone. NurseryLive offers
                        the platform also provides resource such as articles,video, and a gardening a communinty 
                    </Card.Text>
                </Card.Body>
              </div>

              <div className="container">
                <img src={img3} alt="" width="80%" />
              </div>
              <div className="container my-4">
                <Card.Body>
                    <Card.Title>Plants</Card.Title>
                    <Card.Text>
                        Plants are imported for several reasons,especially in modern times when people spend more times
                    </Card.Text>
                    <Card.Text>
                       <strong>Aesthetic appeal:</strong> Plants can add beauty and life to any space!
                    </Card.Text>
                    <Card.Text>
                       <strong>Health benefits:</strong> Plants can improve air quality by absorbing pollutants
                    </Card.Text>
                    <Card.Text>
                       <strong>Sustainability:</strong> Keeping plants can be an Eco-friendly option
                    </Card.Text>
                    <Card.Text>
                       <strong>Food production:</strong> Growing plants like vegetable and fruits can be provides source of health
                    </Card.Text>
                    <Card.Text>
                       <strong>Education:</strong> keeping plants can provide opportunity for learning about biology
                    </Card.Text>
                </Card.Body>
              </div>
              <footer clasName="bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="text-primary"> About Virtual Plant Store</h5>
                            <p>
                                virtual plant store is an Indian online platform that sells plants and gardening supplies!!
                                </p>
                        </div>
                        <div className="col-md-6">
                            <h5 className="text-primary"> Contact Us</h5>
                            <p>
                                <strong>Email:</strong> info@virtualplantstore.com<br/>
                                <strong>Phone:</strong> +1 (123)456-7890<br/>
                                <strong>Address:</strong> #123 Garden Street, Green Valley<br/>
                                
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center mt-3">
                            <p>
                                &copy; {new Date().getFullYear()} Virtual Plant Store. All rights reserved.</p>
                        
                        </div>
                    </div>
                </div>
              </footer>

                    </>
    )
}
