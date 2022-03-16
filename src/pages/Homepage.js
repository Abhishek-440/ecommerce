import React, { useEffect } from "react";
import {
  Row,
  Button,
  Navbar,
  NavLink,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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

  //For loading income and expenses automatically
  useEffect(() => {
    dispatch(retrieveIncome());
    dispatch(handleFetchExpenses());
  }, []);

  //For logging out
  function logout() {
    localStorage.removeItem("token"); //specific item from local storage
    //window.localStorage.clear(); //all items stored in local storage
    navigate("/");
  }

  //For adding more expenses
  function expenseInformation() {
    navigate("/expense/input");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
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

          <Nav.Link href="/home">Home</Nav.Link>

          <NavDropdown title="Expense" id="navbardropdown">
            <NavLink>
              <Link to="/expense/month">show by month</Link>
            </NavLink>
          </NavDropdown>

          <NavDropdown title="Income" id="navbardropdown2">
            <NavLink>
              <Link to="/income/month">Sum by month</Link>
            </NavLink>
            <NavLink>
              <Link to="/income/day">Sum by day</Link>
            </NavLink>
          </NavDropdown>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:{" "}
              <a href="">
                {decoded.email}({decoded.name})
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="text-center">
        <h1>INCOME</h1>
        <Button onClick={incomeInformation}>add income</Button>
      </div>

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

      <h1>EXPENSE</h1>
      <Row className="text-center mt-2">
        <Button onClick={expenseInformation}>Add Expense</Button>
      </Row>

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

      <div className="text-center mt-2">
        <Button onClick={logout}>LOG OUT</Button>
      </div>
    </>
  );
}

export default Home;
