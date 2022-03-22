import { Card, Col } from "react-bootstrap";
import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { removeIncome } from "Containers/ecommerce/action";
import { useDispatch } from "react-redux";
import { updateIncomeCardFunc } from "Containers/ecommerce/action";
import { useNavigate } from "react-router";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const CardComponentIncome = (data) => {
  const { id, title, amount, date, created_at, updated_at } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUpdate = () => {
    dispatch(updateIncomeCardFunc(id));
    navigate("/income/input", { state: data });
  };

  const onDelete = () => {
    dispatch(removeIncome(id));
  };

  //MODAL
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    // ModalClose();
  }
  // MODAL ENDS

  return (
    <Col className="col-10 col-md-4 mt-2 mr-2">
      <Card style={{ width: "18rem" }} className="text-center">
        <div
          className="controls d-flex flex-row-reverse"
          style={{ position: "absolute", bottom: "20px" }}
        >
          <Button variant="Danger" onClick={openModal} style={{ color: "red" }}>
            <AiFillDelete />
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Confirmation box"
          >
            <button onClick={onDelete}>Delete</button>
            <button onClick={closeModal}>Close</button>
          </Modal>
          <Button variant="Danger" onClick={onUpdate}>
            <AiFillEdit />
          </Button>
        </div>
        <Card.Body>
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
