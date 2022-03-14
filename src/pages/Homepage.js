import React, { useEffect, useState } from "react";
import {
  Row,
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { axios, apiUrl } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import CardComponent from "../components/organisms/Card/Card";
// import { useForm } from "react-hook-form";
// import { ExpenseInformation } from "components/organisms/ExpenseInput";
import { handleFetchExpenses } from "Containers/ecommerce/action";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/reducer";
import ReactLogo from "../logo.svg";
import jwtDecode from "jwt-decode";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedJwt = localStorage.getItem("token");
  const decoded = jwtDecode(storedJwt);
  const expense = useSelector(selectExpenses);
  // const { register, handleSubmit, control, setValue } = useForm();
  const [income, setIncome] = useState([]);
  // const [expense, setExpense] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  //GET-INCOME
  const getIncome = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/income`);
      setIncome(res.data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  //For loading income and expenses automatically
  useEffect(() => {
    getIncome();
    dispatch(handleFetchExpenses());
  }, []);

  //For logging out
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  //For adding more expenses
  function expenseInformation() {
    navigate("/expenseinput");
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
            <NavDropdown.Item>
              <Link to="/expensemonth">show by month</Link>
            </NavDropdown.Item>
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
      </div>

      <Row className="text-center">
        {income.incomes?.map((item, id) => (
          // <li>{JSON.stringify(item)}</li>
          <CardComponent
            key={id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            created_at={item.created_at}
          />
        ))}
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </Row>

      <h1>EXPENSE</h1>
      <Row className="text-center mt-2">
        {/* <ExpenseInformation
          register={register}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          control={control}
          setValue={setValue}
        /> */}
        <Button onClick={expenseInformation}>Add Expense</Button>
      </Row>

      <Row>
        {expense?.map((item, expenseId) => (
          // <li>{JSON.stringify(item)}</li>
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
