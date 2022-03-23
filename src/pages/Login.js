import React from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginn } from "Containers/ecommerce/action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }

  const submitHandler = async (values) => {
    await dispatch(Loginn(values));
    navigate("/home");
  };

  return (
    <div className="d-flex vh-100 flex-column justify-content-center align-items-center bg-light">
      <div className="d-flex justify-content-center align-items-center p-2 m-2">
        <h3>YOUR INCOME/EXPENSE TRACKER</h3>
      </div>
      <Container className="login-container d-flex justify-content-center align-items-center m-2">
        <Card
          className="login-card d-flex justify-content-center"
          bg="dark"
          text="light"
          style={{ width: "30rem" }}
        >
          <Card.Header className="text-center p-2 ">LOGIN</Card.Header>
          <Form className="login-form" onSubmit={handleSubmit(submitHandler)}>
            <Form.Group className="p-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="p-1 m-auto"
                type="text"
                name="email"
                control={control}
                placeholder="example@email.com"
                onChange={handleChange}
                {...register(`email`, { required: true })}
              />
            </Form.Group>

            <Form.Group className="p-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="p-1 m-auto"
                type="password"
                name="password"
                control={control}
                onChange={handleChange}
                {...register(`password`, { required: true })}
              />
            </Form.Group>

            <Form.Group className="text-center">
              <Button
                className="loginSubmit p-1 m-2 sm"
                variant="primary"
                type="submit"
              >
                Log Me In!
              </Button>
            </Form.Group>

            <Form.Group className="text-center mb-2">
              <Form.Text>
                {`Don't have an account?`}{" "}
                <Link to="/register"> Create an account!</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
