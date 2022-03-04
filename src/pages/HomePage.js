import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { axios, apiUrl } from "../utils";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/organisms/Card/Card";

function Home() {
  const navigate = useNavigate();
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
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
  }, [income]);

  //GET-EXPENSE
  const getExpense = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/expense`);
      setExpense(res.data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  useEffect(() => {
    getExpense();
  }, [expense]);

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

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
            title={item.title}
            amount={item.amount}
            date={item.date}
            created_at={item.created_at}
          />
        ))}
        {fetchError && <p style={{ color: "red" }}>{fetchError}</p>}
      </Row>

      <div className="text-center mt-2">
        <h1>EXPENSE</h1>
      </div>

      <Row>
        {expense.expenses?.map((item, id) => (
          // <li>{JSON.stringify(item)}</li>
          <CardComponent
            title={item.title}
            amount={item.amount}
            date={item.date}
            created_at={item.created_at}
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
