import { Button, Container, Card, Form } from "react-bootstrap";

function Login() {
  return (
    <Container className="login-container vh-100 d-flex justify-content-center align-items-center">
      <Card
        className="login-card d-flex justify-content-center"
        bg="dark"
        text="light"
        style={{ width: "30rem" }}
      >
        <Card.Header className="text-center">
          <h4>LOGIN</h4>
        </Card.Header>
        <Form className="login-form">
          <Form.Group className="p-1 mt-1">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="text"
              name="email"
              placeholder="example@email.com"
            />
          </Form.Group>

          <Form.Group className="p-1 ">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="password"
              name="password"
            />
          </Form.Group>

          <div className="text-center">
            <Button
              className="loginSubmit p-1 m-2 sm"
              variant="primary"
              type="submit"
            >
              Log Me In!
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
