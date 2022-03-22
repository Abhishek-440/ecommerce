import React, { useState } from "react";
import axios from "../utils/axios";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "Routes/auth";

const Login = () => {
  const navigate = useNavigate();
  const storedJwt = localStorage.getItem("token");
  // eslint-disable-next-line no-unused-vars
  const [jwt, setJwt] = useState(storedJwt || null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("");
  const auth = useAuth();

  //POST
  const getJwt = async (value) => {
    const postData = {
      email: value.email,
      password: value.password,
    };

    const res = await axios.post(`/api/auth`, postData);

    if (res.status === 200) {
      localStorage.setItem("token", res.data?.token);

      setJwt(res.data?.token);

      navigate("/home", { replace: true });
    }
  };

  const handleChange = (e) => {
    e.persist();
    setLoginData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    getJwt(loginData);
    auth.login(user);
  }

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
          <Form.Group className="p-1 mt-1" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="text"
              name="email"
              value={loginData.email}
              placeholder="example@email.com"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="p-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Button
              className="loginSubmit p-1 m-2 sm"
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Log Me In!
            </Button>
          </Form.Group>

          <Form.Group className="text-center">
            <Form.Text>
              {`Don't have an account?`} <br />
              <Link to="/register"> Create an account!</Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
