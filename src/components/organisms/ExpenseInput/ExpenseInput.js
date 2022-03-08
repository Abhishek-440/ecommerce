import React from "react";
// import { useFieldArray } from "react-hook-form";
import { Row, Col, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";

const ExpenseInformation = (prop) => {
  const { register } = prop;
  //   const dispatch = useDispatch();

  const saveSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="card">
      <div className="card-header">Expense Information</div>
      <div className="card-body">
        <Row className="form-row form-group">
          <Col className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Title of your expense"
              name="title"
              {...register(`title`, { required: true })}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Amount of your expense"
              name="amount"
              {...register(`amount`, { required: true })}
            />
            <input
              type="date"
              className="form-control"
              placeholder=""
              name="dateOfExpense"
              {...register(`dateOfExpense`, { required: true })}
            />
          </Col>
        </Row>
        <Row>
          <Button onClick={saveSubmit}>Save</Button>
        </Row>
      </div>
    </div>
  );
};

export default ExpenseInformation;
