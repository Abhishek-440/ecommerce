import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
//import * as Yup from "yup";

function Register() {
  return (
    <>
      <Container className="p-5 mw-60">
        <div className="text-center mb-5 mt-5">
          <h1 className="text-secondary text-uppercase font-weight-bold">
            Register
          </h1>
        </div>
        <Form>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                placeholder="Enter mobile number"
              />

              <Form.Text className="text-muted">
                Enter a valid local number.
              </Form.Text>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces or special characters.
              </Form.Text>
            </Form.Group>

            <Form.Group
              as={Col}
              className="mb-3"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Retype Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms and Conditions." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Register;
