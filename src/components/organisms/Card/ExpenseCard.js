import { Card, Col } from "react-bootstrap";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { removeExpense } from "Containers/ecommerce/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Moment from "react-moment";
import { capitalize } from "utils";

const CardComponent = (data) => {
  const { id, title, amount, date, created_at, updated_at } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onUpdate = () => {
    navigate(`/expense/input`, { state: data });
  };

  const onDelete = () => {
    dispatch(removeExpense(id));
  };

  return (
    <Col className="col-10 col-md-4 mt-2 mr-2">
      <Card style={{ width: "18rem" }} className="text-center">
        <div className="d-flex flex-row-reverse space-around dark">
          <Button variant="Danger" onClick={onDelete}>
            <AiFillDelete />
          </Button>
          <Button variant="Danger" onClick={onUpdate}>
            <AiFillEdit />
          </Button>
        </div>
        <Card.Body>
          <Card.Title>{capitalize(title)}</Card.Title>
          <Card.Text>{amount}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Card.Text className="light">
            created:
            <Moment format="YYYY/MM/DD">{created_at}</Moment>
          </Card.Text>
          {updated_at ? (
            <Card.Text>
              updated: <Moment fromNow>{updated_at}</Moment>
            </Card.Text>
          ) : (
            <Card.Text>not yet updated</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
