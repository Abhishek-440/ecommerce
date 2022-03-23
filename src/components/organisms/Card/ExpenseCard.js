import { Card, Col } from "react-bootstrap";
import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { removeExpense } from "Containers/ecommerce/action";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
import Moment from "react-moment";
import { capitalize } from "utils";
import Modal from "react-modal";
import { ExpenseInformation } from "../ExpenseInput";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CardComponent = (data) => {
  const { id, title, amount, date, created_at, updated_at } = data;
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  // const [currentExpense, setCurrentExpense] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openUpdateModal() {
    // setCurrentExpense(data);
    setUpdateModal(true);
  }

  function closeUpdateModal() {
    setUpdateModal(false);
  }

  // const onUpdate = () => {
  //   navigate(`/expense/input`, { state: data });
  // };

  const onDelete = () => {
    dispatch(removeExpense(id));
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Delete Modal"
      >
        <h3 className="d-block">
          Are you sure you want to permanently delete this expense?
        </h3>
        <div className="d-flex justify-content-end">
          <Button onClick={closeModal} className="mt-2 mb-2 ml-2">
            Cancel
          </Button>
          <Button onClick={onDelete} className="btn-danger m-2">
            Confirm
          </Button>
        </div>
      </Modal>
      <Modal
        isOpen={updateModal}
        onRequestClose={closeUpdateModal}
        style={customStyles}
        contentLabel="Update Modal"
      >
        <ExpenseInformation closeModal={closeUpdateModal} data={data} />
      </Modal>
      <Col className="col-10 col-md-4 mr-2">
        <Card style={{ width: "18rem" }} className="text-center m-4">
          <Card.Header>
            <Card.Title className="d-flex justify-content-start pt-1">
              {capitalize(title)}
            </Card.Title>
            <div className="position-absolute top-0 end-0">
              <Button
                className="btn btn-danger mt-1 ml-1 mb-1"
                onClick={openModal}
              >
                <AiFillDelete />
              </Button>
              <Button
                className="btn btn-secondary m-1"
                onClick={openUpdateModal}
              >
                <AiFillEdit />
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Card.Text>NRs. {amount}</Card.Text>
            <Card.Text>Date: {date}</Card.Text>
            <Card.Text className="light">
              created: <Moment format="YYYY/MM/DD">{created_at}</Moment>
            </Card.Text>
            {updated_at ? (
              <Card.Text>
                updated: <Moment fromNow>{updated_at}</Moment>
              </Card.Text>
            ) : (
              <Card.Text>updated: not yet updated</Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
