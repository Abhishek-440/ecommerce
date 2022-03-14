import { Card, Col } from "react-bootstrap";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { removeIncome } from "Containers/ecommerce/action";
import { useDispatch } from "react-redux";
import { updateIncomeCardFunc } from "Containers/ecommerce/action";
//import { Navigate } from "react-router";
import { useNavigate } from "react-router";
// import { selectExpenseById } from "../../../Containers/ecommerce/reducer";
// m
//import { ExpenseInformation } from "../ExpenseInput";

const CardComponentIncome = (data) => {
  const { id, title, amount, date, created_at, updated_at } = data;
  // const expense = useSelector((state) => selectExpenseById(state, id));
  // const { title, amount, date, created_at } = expense;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpdate = () => {
    dispatch(updateIncomeCardFunc(id));
    navigate("/income/input", { state: data });
  };

  const onDelete = () => {
    //console.log(id);
    dispatch(removeIncome(id));
  };

  return (
    <Col className="col-10 col-md-4 mt-2 mr-2">
      <Card style={{ width: "18rem" }} className="text-center">
        <div className="d-flex flex-row-reverse">
          <Button variant="Danger" onClick={onDelete}>
            <AiFillDelete />
          </Button>
          <Button variant="Danger" onClick={onUpdate}>
            <AiFillEdit />
          </Button>
        </div>
        <Card.Body>
          {/* <Card.Title>{id}</Card.Title> */}
          <Card.Title>{title}</Card.Title>
          <Card.Text>{amount}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{new Date(created_at).toLocaleString()}</Card.Text>
          <Card.Text>{new Date(updated_at).toLocaleString()}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponentIncome;
