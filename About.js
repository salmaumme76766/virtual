
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img3 from "./Images/img3.jpg";
export default function About() {
  return (
    <Container>
      
      <Row>
        <Col>
        <h2 className="text-primary"> About </h2>
          <p>Welcome to our virtual plant store!</p>
          <p>
            At our store, we are passionate about bringing the beauty and benefits of plants into your life. Whether you
            are a seasoned plant enthusiast or just starting your journey with plants, we have something for everyone.
          </p>
          <p>
            Our mission is to provide high-quality plants, excellent customer service, and valuable resources to help you
            care for your plants and create a green oasis in your home or workspace.
          </p>
          <p>
            Explore our wide selection of indoor and outdoor plants, plant care products, and accessories. We strive to
            inspire and empower you to cultivate a deeper connection with nature and enjoy the many joys of plant
            ownership.
          </p>
          <p>
            Thank you for choosing us as your plant store. We look forward to serving you and being a part of your
            plant-loving journey!
          </p>
          <p>
                                <strong>Email:</strong> info@virtualplantstore.com<br/>
                                <strong>Phone:</strong> +1 (123)456-7890<br/>
                                <strong>Address:</strong> #123 Garden Street, Green Valley<br/>
                                
                            </p>
        </Col>
      </Row>
    </Container>
  );
};



  

