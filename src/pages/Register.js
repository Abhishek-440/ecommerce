import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router";
// import { addUser } from "Containers/ecommerce/api";
//import * as yup from "yup";
//import { yupResolver } from "@hookform/resolvers/yup";

/* const schema = yup.object({
  name: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
  email: yup.string().email().required("This field is required"),
  phone: yup.number().required("This field is required"),
  dob: yup.date().min(new Date(1980, 0, 1)).required("This Field is required."),
  password: yup
    .string()
    .required("Password is mandatory")
    .min(3, "Password must be at 3 char long"),
  confirmPwd: yup
    .string()
    .required("Password is mandatory")
    .oneOf([yup.ref("password")], "Passwords does not match"),
}); */

const Register = () => {
  const navigate = useNavigate();

  const { acceptedFiles, getInputProps, getRootProps } = useDropzone({
    accept: "image/jpeg,image/png",
  });

  const [data, setData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    profile_picture: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleDatePicker = (e) => {
    setData({
      ...data,
      dob: e,
    });
  };

  // const handleFileChange = (e) => {
  //   e.stopPropagation();
  //   setData({
  //     ...data,
  //     profile_picture: e.target.files,
  //   });
  // };

  const handleData = (e) => {
    // e.preventDefault();
    console.log(e);
    // const userData = {
    //   name: data.name,
    //   address: data.address,
    //   email: data.email,
    //   phone: data.phone,
    //   date_of_birth: data.dob,
    //   active: true,
    //   password: data.password,
    //   profile_picture: data.profile_picture,
    // };
    // console.log("hello");
    // let config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("date_of_birth", data.dob);
    formData.append("active", true);
    formData.append("password", data.password);
    formData.append("profile_picture", acceptedFiles[0]);

    axios
      .post("http://localhost:3005/api/auth/register", formData)
      .then((response) => {
        console.log(response);
        if (response === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  const { handleSubmit } = useForm();

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  //const onSubmit = (value) => console.log(value);

  return (
    <>
      <Container className="p-5 mw-60">
        <div className="text-center mb-5 mt-5">
          <h1 className="text-secondary text-uppercase font-weight-bold">
            Register
          </h1>
        </div>

        <Form onSubmit={handleSubmit(handleData)}>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Address"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />

              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Enter mobile number"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />

              <Form.Text className="text-muted">
                Enter a valid local number.
              </Form.Text>
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="formDateofBirth"
              name="date_of_birth"
            >
              <Form.Label>Date Of Birth</Form.Label>
              <DatePicker
                showPopperArrow={true}
                onChange={handleDatePicker}
                selected={data.dob}
                maxDate={new Date()}
                customInput={<Form.Control />}
              />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
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
              <Form.Control
                type="password"
                placeholder="Retype Password"
                name="confirmPwd"
                //value={data.password}
                //onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept Terms and Conditions." />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Please Upload your picture</Form.Label>
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} name="profile_picture" />
                <p>Drag and drop your profile picture here!</p>
              </div>
              <aside>
                <h4>Accepted File</h4>
                <ul>{acceptedFileItems}</ul>
              </aside>
            </section>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
