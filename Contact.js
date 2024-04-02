import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast } from "react-toastify";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success('Your message has been sent!');
  };

  return (
    <Container>
      <Row>
        <Col>
        <h2 className="text-primary"> Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="mt-4">
            You can also contact us by email at <a href="mailto:contact@example.com">info@virtualplantstore@.com</a> or by phone
            at <a href="tel:+1234567890">+1 (123)456-7890</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
