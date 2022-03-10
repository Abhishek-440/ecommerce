import { Card, Col } from "react-bootstrap";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { removeExpense, updateOldExpense } from "Containers/ecommerce/action";
import { useDispatch } from "react-redux";
// import { selectExpenseById } from "../../../Containers/ecommerce/reducer";

const CardComponent = (data) => {
  const { id, title, amount, date, created_at } = data;
  // const expense = useSelector((state) => selectExpenseById(state, id));
  // const { title, amount, date, created_at } = expense;
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(updateOldExpense(id));
  };

  const onDelete = () => {
    dispatch(removeExpense(id));
  };

  return (
    <Col className="col-10 col-md-4 mt-2">
      <Card style={{ width: "18rem" }} className="text-center">
        <Button variant="Danger" onClick={onDelete()}>
          <AiFillDelete />
        </Button>
        <Button variant="Danger" onClick={onUpdate}>
          <AiFillEdit />
        </Button>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{amount}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{created_at}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
