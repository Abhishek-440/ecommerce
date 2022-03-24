import React, { useEffect } from "react";
import {
  Row,
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/ExpenseReducer";
import ReactLogo from "../logo.svg";
import jwtDecode from "jwt-decode";
import { CardComponent, CardComponentIncome } from "components/organisms/Card";
import {
  handleFetchExpenses,
  retrieveIncome,
} from "Containers/ecommerce/action";
import { selectIncomes } from "Containers/ecommerce/IncomeReducer";
import { Link } from "react-router-dom";
import { LogOutt } from "Containers/ecommerce/action";
import Modal from "react-modal";
import { ExpenseInformation } from "components/organisms/ExpenseInput";

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

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedJwt = localStorage.getItem("token");
  const decoded = jwtDecode(storedJwt);
  const income = useSelector(selectIncomes);
  const expense = useSelector(selectExpenses);
  function incomeInformation() {
    navigate("/income/input");
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //For loading income and expenses automatically
  useEffect(() => {
    dispatch(retrieveIncome());
    dispatch(handleFetchExpenses());
  }, []);

  //For logging out
  const logout = async () => {
    await dispatch(LogOutt()); //specific item from local storage
    //window.localStorage.clear(); //all items stored in local storage
    navigate("/");
  };

  //For adding more expenses
  // function expenseInformation() {
  //   navigate("/expense/input");
  // }

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  return (
    <div className="bg-light">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ExpenseInformation closeModal={closeModal} />
          </Modal>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src={ReactLogo}
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Income/Expense Tracker
          </Navbar.Brand>
          <Nav.Link href="/home" className="text-light">
            Home
          </Nav.Link>
          <NavDropdown
            className="text-light"
            title="Expense"
            id="navbardropdown"
          >
            <NavLink>
              <Link to="/expense/month">show by month</Link>
            </NavLink>
            <NavLink>
              <Link to="/expense/day">show by day</Link>
            </NavLink>
          </NavDropdown>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a href="">
                {decoded.email}({decoded.name})
              </a>
            </Navbar.Text>
            <div>
              <img
                alt=""
                src={`http://localhost:3005/${decoded.profile_picture}`}
                width="100"
                height="30"
                className="d-inline-block align-top"
              />
            </div>
            <div className="text-center m-2">
              <Button onClick={logout} className="btn-danger">
                LOG OUT
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <hr />

      <div className="text-center position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <h1>INCOME</h1>
        </div>
        <div className="d-flex position-absolute top-0 end-0">
          <Button onClick={incomeInformation} className="m-2">
            Add Income
          </Button>
        </div>
      </div>

      <hr />
      <Row className="text-center">
        {income?.map((item, incomeId) => (
          <CardComponentIncome
            key={incomeId}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            created_at={item.created_at}
          />
        ))}
      </Row>

      <hr />
      <div className="text-center position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <h1>EXPENSE</h1>
        </div>
        <div className="d-flex position-absolute top-0 end-0">
          <Button onClick={openModal} className="m-2">
            Add Expense
          </Button>
        </div>
      </div>
      <hr />
      <Row>
        {expense?.map((item, expenseId) => (
          <CardComponent
            key={expenseId}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            created_at={item.created_at}
            updated_at={item.updated_at}
          />
        ))}
      </Row>
    </div>
  );
}

export default Home;
