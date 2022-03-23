import React from "react";
// import axios from "../utils/axios";
import { Button, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { Loginn } from "Containers/ecommerce/action";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // const storedJwt = localStorage.getItem("token");
  // let decoded = jwtDecode(storedJwt);
  // let expireDate = decoded.exp;
  // // let login = useSelector((state) => state.login?.isAuthenticate);
  // let currentTimeInMillisecs = new Date().getTime();
  // var currentTimeInSecs = currentTimeInMillisecs / 1000;

  // const [loginData, setLoginData] = useState({
  //   email: "",
  //   password: "",
  // });

  // eslint-disable-next-line no-unused-vars
  //const [user, setUser] = useState("");
  //const auth = useAuth();

  //POST
  // const getJwt = async (value) => {
  //   const postData = {
  //     email: value.email,
  //     password: value.password,
  //   };

  //   const res = await axios.post(`/api/auth`, postData);

  //   if (res.status === 200 && expense) {
  //     localStorage.setItem("token", res.data?.token);

  //     setJwt(res.data?.token);

  //     navigate("/home");
  //   }
  // };

  // const handleChange = (e) => {
  //   e.persist();
  //   setLoginData((prevValue) => ({
  //     ...prevValue,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }

  const submitHandler = async (values) => {
    await dispatch(Loginn(values));
    navigate("/home");
  };

  // useEffect(() => {
  //   if (expireDate > currentTimeInSecs) {
  //     navigate("/Home");
  //   } else {
  //     localStorage.removeItem("token");
  //     navigate("/");
  //   }
  // }, []);

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
        <Form className="login-form" onSubmit={handleSubmit(submitHandler)}>
          <Form.Group className="p-1 mt-1" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="text"
              name="email"
              control={control}
              // value={loginData.email}
              placeholder="example@email.com"
              onChange={handleChange}
              {...register(`email`, { required: true })}
            />
          </Form.Group>

          <Form.Group className="p-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="p-1 m-auto"
              type="password"
              name="password"
              control={control}
              // value={loginData.password}
              onChange={handleChange}
              {...register(`password`, { required: true })}
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Button
              className="loginSubmit p-1 m-2 sm"
              variant="primary"
              type="submit"
              // onClick={() => dispatch(Loginn(loginData))}
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
