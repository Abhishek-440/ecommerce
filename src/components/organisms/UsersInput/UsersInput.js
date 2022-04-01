/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Row, Form, Col, Button } from "react-bootstrap";
import { updateOldUser } from "Containers/ecommerce/action";

const UsersInput = ({ closeModal, props }) => {
  const { name, address, email, phone, date_of_birth, profile_picture } = props;
  const dispatch = useDispatch();
  const { handleSubmit, register, setValue } = useForm();

  const saveUpdate = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("date_of_birth", data.date_of_birth);
    formData.append("profile_picture", data.profile_picture);

    const res = dispatch(updateOldUser(formData));
    console.log("🚀 ~ file: ExpenseInput.js ~ line 43 ~ saveUpdate ~ res", res);
    // dispatch(handleFetchExpenses());
    closeModal();
  };

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }
  useEffect(async () => {
    if (props) {
      setValue("name", name);
      setValue("address", address);
      setValue("email", email);
      setValue("phone", phone);
      setValue("date_of_birth", date_of_birth);
      setValue("profile_picture", profile_picture);
    }
  });

  return (
    <>
      <div className="card">
        <div className="card-header">Edit User here!</div>
        <div className="card-body">
          <Form onSubmit={handleSubmit(saveUpdate)}>
            <Row className="form-row form-group">
              <Col className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  // value={title}
                  onChange={handleChange}
                  {...register(`name`, { required: true })}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your address"
                  name="address"
                  onChange={handleChange}
                  {...register(`address`, { required: true })}
                />
                <input
                  type="date_of_birth"
                  className="form-control"
                  placeholder=""
                  name="date_of_birth"
                  onChange={handleChange}
                  {...register(`date_of_birth`, { required: true })}
                />
              </Col>
            </Row>
            <div className="text-center mt-2">
              <Button type="submit">Save</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UsersInput;
