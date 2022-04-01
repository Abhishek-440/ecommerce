/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import { removeUser } from "Containers/ecommerce/action";
import { UsersInput } from "../UsersInput";

const UsersCard = (props) => {
  const { id, name, address, email, phone, date_of_birth, profile_picture } =
    props;
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openUpdateModal() {
    setUpdateModal(true);
  }

  function closeUpdateModal() {
    setUpdateModal(false);
  }

  const onDelete = () => {
    dispatch(removeUser(id));
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
        <section>
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
        </section>
      </Modal>
      <Modal
        isOpen={updateModal}
        onRequestClose={closeUpdateModal}
        style={customStyles}
        contentLabel="Update Modal"
      >
        <UsersInput closeModal={closeUpdateModal} props={props} />
      </Modal>
      <Col className="col-10 col-md-4 mt-2 mr-2">
        <Card style={{ width: "18rem" }} className="text-center">
          <div className="position-absolute top-0 end-0">
            <Button
              className="btn btn-danger mt-1 ml-1 mb-1"
              onClick={openModal}
            >
              <AiFillDelete />
            </Button>
            <Button className="btn btn-secondary m-1" onClick={openUpdateModal}>
              <AiFillEdit />
            </Button>
          </div>
          <Card.Img
            variant="top"
            src={`http://localhost:3005/${profile_picture}`}
          />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
            <Card.Text>{address}</Card.Text>
            <Card.Text>{email}</Card.Text>
            {/* <Card.Text>{new Date(created_at).toLocaleString()}</Card.Text>
          {updated_at ? (
            <Card.Text>
              updated: <Moment fromNow>{updated_at}</Moment>
            </Card.Text>
          ) : (
            <Card.Text>not yet updated</Card.Text>
          )} */}
            <Card.Text>{phone}</Card.Text>
            <Card.Text>{date_of_birth}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default UsersCard;
