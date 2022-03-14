import React, { useEffect, useState } from "react";
import { Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
//import CardComponent from "../components/organisms/Card/Card";
import { CardComponent, CardComponentIncome } from "components/organisms/Card";
//import { IncomeInformation } from "../components/organisms/IncomeInput";
//import { ExpenseInformation } from "components/organisms/ExpenseInput";
import {
  handleFetchExpenses,
  retrieveIncome,
} from "Containers/ecommerce/action";
import { selectExpenses } from "Containers/ecommerce/expenseReducer";
import { selectIncomes } from "Containers/ecommerce/incomeReducer";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const income = useSelector(selectIncomes);
  const expense = useSelector(selectExpenses);
  //const { register, handleSubmit } = useForm();
  //const [income, setIncome] = useState([]);
  // const [expense, setExpense] = useState([]);
  const [fetchError] = useState(null);
  function incomeInformation() {
    navigate("/incomeInput");
  }

  //GET-INCOME
  /* const getIncome = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/income`);
      setIncome(res.data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  }; */

  useEffect(() => {
    dispatch(retrieveIncome());
    dispatch(handleFetchExpenses());
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

  // useEffect(() => {
  // }, []);

  function logout() {
    localStorage.removeItem("token"); //specific item from local storage
    //window.localStorage.clear(); //all items stored in local storage
    navigate("/");
  }

  // function expenseInformation() {
  //   <ExpenseInformation
  //     register={register}
  //     handleSubmit={handleSubmit}
  //     dispatch={dispatch}
  //   />;
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
        {/* <IncomeInformation register={register} handleSubmit={handleSubmit} /> */}
        <Button onClick={incomeInformation}>add income</Button>
      </div>

      <Row className="text-center">
        {income?.map((item, incomeId) => (
          // <li>{JSON.stringify(item)}</li>
          <CardComponentIncome
            key={incomeId}
            id={item.id}
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
        {/* <ExpenseInformation
          register={register}
          handleSubmit={handleSubmit}
          dispatch={dispatch}
          control={control}
          setValue={setValue}
        /> */}
        {/* <Button onClick={expenseInformation}>Add Expense</Button> */}
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
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </Row>

      <div className="text-center mt-2">
        <Button onClick={logout}>LOG OUT</Button>
      </div>
    </>
  );
}

export default Home;
