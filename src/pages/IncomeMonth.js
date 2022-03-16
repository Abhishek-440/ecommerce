import React, { useEffect, useState } from "react";
import moment from "moment";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { retrieveIncome } from "Containers/ecommerce/action";
import { selectIncomes } from "Containers/ecommerce/IncomeReducer";

const IncomeMonth = () => {
  const income = useSelector(selectIncomes);
  const [incomeMonth, setIncomeMonth] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveIncome());
    const storeIncomeMonths = [];

    income?.forEach((item) => {
      const m = moment(item.date).format("YYYY/MM/DD");
      if (!storeIncomeMonths.includes(m)) {
        storeIncomeMonths.push(m);
      }
    });
    setIncomeMonth(storeIncomeMonths);
  }, []);

  return (
    <div>
      <Container>
        {incomeMonth.map((item) => {
          let sum = 0;
          const thisDayData = income?.filter(
            (x) => moment(x.date).format("YYYY/MM/DD") === item
          );
          thisDayData.map((x) => {
            return (sum += x.amount);
          });
          return (
            <li>
              {item} : {sum}{" "}
            </li>
          );
        })}
      </Container>
    </div>
  );
};

export default IncomeMonth;
