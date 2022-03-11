// import { fetchExpenseById } from "Containers/ecommerce/api";
import React, { useEffect } from "react";
// import { useFieldArray } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
// import { useLocation } from "react-router";
import {
  saveNewExpense,
  updateOldExpense,
} from "../../../Containers/ecommerce/action";

const ExpenseInformation = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit, dispatch, setValue } = prop;
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation();
  // const { id, title, amount, date, created_at, updated_at } = location.state;
  //location.state is object!
  const dispatch = useDispatch();
  // const params = useParams();
  useEffect(async () => {
    if (location.state) {
      try {
        const { id, title, amount, date, created_at, updated_at } =
          location.state;
        // const response = await fetchExpenseById(params.id);
        setValue("id", id);
        setValue("title", title);
        setValue("amount", amount);
        setValue("date", new Date(date));
        setValue("updated_at", new Date(updated_at));
        setValue("created_at", created_at);
        // console.log(response);
      } catch (e) {
        // console.log(e.message);
      }
    }
  });

  const saveSubmit = async (data) => {
    dispatch(saveNewExpense(data));
    navigate("/Home");
  };

  const saveUpdate = async (data) => {
    dispatch(updateOldExpense(data));
    navigate("/Home");
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
