import React, { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import { axios, apiUrl } from "../utils";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/organisms/Card/Card";
import { useForm } from "react-hook-form";
import { ExpenseInformation } from "components/organisms/ExpenseInput";
import { handleFetchExpenses } from "Containers/ecommerce/action";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/reducer";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const expense = useSelector(selectExpenses);
  const { register, handleSubmit } = useForm();
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

  useEffect(() => {
    getIncome();
  }, []);

  //GET-EXPENSE
  // const getExpense = async () => {
  //   try {
  //     const res = await axios.get(`${apiUrl}/api/expense`);
  //     setExpense(res.data);
  //     setFetchError(null);
  //   } catch (err) {
  //     setFetchError(err.message);
  //   }
  // };

  useEffect(() => {
    dispatch(handleFetchExpenses());
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  // function expenseInformation() {
  //   <ExpenseInformation register={register} />;
  // }

  // const incomeData = {
  //   title: income.title,
  //   amount: income.amount,
  //   date: income.date,
  //   created_at: income.created_at,
  // };

  return (
    <>
      {/* <Button onClick={() => getIncome()}>INCOME</Button> */}
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

      <Row className="text-center mt-2">
        <h1>EXPENSE</h1>
        <ExpenseInformation register={register} handleSubmit={handleSubmit} />
        {/* <Button onClick={expenseInformation}>Add Expense</Button> */}
      </Row>

      <Row>
        {expense?.map((item, expenseId) => (
          // <li>{JSON.stringify(item)}</li>
          <CardComponent
            key={expenseId}
            id={expenseId}
            // title={item.title}
            // amount={item.amount}
            // date={item.date}
            // created_at={item.created_at}
          />
        ))}
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </Row>

      <div className="text-center mt-2">
        <Button onClick={logout}>LOG OUT</Button>
      </div>
    </>
  );
}

export default Home;
