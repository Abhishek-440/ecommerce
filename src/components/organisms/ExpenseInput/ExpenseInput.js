import { fetchExpenseById } from "Containers/ecommerce/api";
import React, { useEffect } from "react";
// import { useFieldArray } from "react-hook-form";
import { Row, Col, Button, Form } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { saveNewExpense } from "../../../Containers/ecommerce/action";

const ExpenseInformation = (prop) => {
  const { register, handleSubmit, dispatch, setValue } = prop;
  // const dispatch = useDispatch();
  const params = useParams();
  useEffect(async () => {
    if (params.id) {
      try {
        const response = await fetchExpenseById(params.id);
        setValue("title", response.title);
        setValue("amount", response.amount);
        console.log(response);
      } catch (e) {
        console.log(e.message);
      }
    }
  });
  const saveSubmit = (data) => {
    // console.log(data);
    dispatch(saveNewExpense(data));
  };

  function handleChange(e) {
    e.persist();
    e.target.name = e.target.value;
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          {params.id ? "Edit " : "Add "} Expenses Here!
        </div>
        <div className="card-body">
          <Form onSubmit={handleSubmit(saveSubmit)}>
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
