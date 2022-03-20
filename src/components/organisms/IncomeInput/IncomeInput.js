import React, { useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { createNewIncome } from "../../../Containers/ecommerce/action";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";
import { updateIncomeCardFunc } from "../../../Containers/ecommerce/action";

const IncomeInformation = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(async () => {
    if (location.state) {
      const { id, title, amount, date, created_at, updated_at } =
        location.state;
      setValue("id", id);
      setValue("title", title);
      setValue("amount", amount);
      setValue("date", new Date(date));
      setValue("updated_at", new Date(updated_at));
      setValue("created_at", created_at);
    }
  });
  const saveSubmit = (data) => {
    console.log(data);
    dispatch(createNewIncome(data));
    navigate("/home");
  };

  const saveUpdate = async (data) => {
    dispatch(updateIncomeCardFunc(data));
    navigate("/home");
  };

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          {location.state ? "Edit " : "Add "} Expenses Here!
        </div>
        <div className="card-body">
          <Form
            onSubmit={
              location.state
                ? handleSubmit(saveUpdate)
                : handleSubmit(saveSubmit)
            }
          >
            <Row className="form-row form-group">
              <Col className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of your expense"
                  name="title"
                  onChange={handleChange}
                  {...register(`title`, { required: true })}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount of income"
                  name="amount"
                  onChange={handleChange}
                  {...register(`amount`, { required: true })}
                />
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="date"
                  onChange={handleChange}
                  {...register(`date`, { required: true })}
                />
              </Col>
            </Row>
            <Row>
              <Button type="submit">Save</Button>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default IncomeInformation;
