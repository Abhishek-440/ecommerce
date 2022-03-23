/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import {
  handleFetchExpenses,
  saveNewExpense,
  updateOldExpense,
} from "../../../Containers/ecommerce/action";

// eslint-disable-next-line react/prop-types
const ExpenseInformation = ({ closeModal, data }) => {
  console.log(
    "🚀 ~ file: ExpenseInput.js ~ line 13 ~ ExpenseInformation ~ data",
    data
  );
  // const { id, title, amount, date, created_at, updated_at } = data;
  // const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  // const location = data.location;
  const dispatch = useDispatch();
  useEffect(async () => {
    if (data) {
      const { id, title, amount, date, created_at, updated_at } = data;
      setValue("id", id);
      setValue("title", title);
      setValue("amount", amount);
      setValue("date", new Date(date));
      setValue("updated_at", new Date(updated_at));
      setValue("created_at", created_at);
    }
  });

  const saveSubmit = async (data) => {
    dispatch(saveNewExpense(data));
    closeModal();
  };

  const saveUpdate = async (data) => {
    const res = dispatch(updateOldExpense(data));
    console.log("🚀 ~ file: ExpenseInput.js ~ line 43 ~ saveUpdate ~ res", res);

    dispatch(handleFetchExpenses());
    closeModal();
  };

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          {data ? "Edit " : "Add "} Expenses Here!
        </div>
        <div className="card-body">
          <Form
            onSubmit={
              data ? handleSubmit(saveUpdate) : handleSubmit(saveSubmit)
            }
          >
            <Row className="form-row form-group">
              <Col className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of your expense"
                  name="title"
                  // value={title}
                  onChange={handleChange}
                  {...register(`title`, { required: true })}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount of your expense"
                  name="amount"
                  onChange={handleChange}
                  {...register(`amount`, { required: true })}
                />
                <input
                  type="date"
                  className="form-control"
                  placeholder=""
                  name="date"
                  onChange={handleChange}
                  {...register(`date`, { required: true })}
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

export default ExpenseInformation;
