import React from "react";
// import { useFieldArray } from "react-hook-form";
import { Row, Col, Button, Form } from "react-bootstrap";
import { createIncome } from "../../../Containers/ecommerce/action";
import { useDispatch } from "react-redux";

const IncomeInformation = (prop) => {
  const { register, handleSubmit } = prop;
  const dispatch = useDispatch();

  const saveSubmit = (data) => {
    dispatch(createIncome(data));
    console.log(data);
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Income Details</div>
        <div className="card-body">
          <Form onSubmit={handleSubmit(saveSubmit)}>
            <Row className="form-row form-group">
              <Col className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of your expense"
                  name="title"
                  {...register(`incomeTitle`, { required: true })}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount of income"
                  name="amount"
                  {...register(`incomeAmount`, { required: true })}
                />
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="dateOfIncome"
                  {...register(`dateOfIncome`, { required: true })}
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
