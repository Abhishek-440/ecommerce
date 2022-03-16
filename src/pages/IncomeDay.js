import React, { useEffect, useState } from "react";
import moment from "moment";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { retrieveIncome } from "Containers/ecommerce/action";
import { selectIncomes } from "Containers/ecommerce/IncomeReducer";

const IncomeDay = () => {
  const income = useSelector(selectIncomes);
  const [incomeDay, setIncomeDay] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveIncome());
    const storeIncomeDays = [];

    income?.forEach((item) => {
      const d = moment(item.date).format("YYYY/MM/DD");
      if (!storeIncomeDays.includes(d)) {
        storeIncomeDays.push(d);
      }
    });
    setIncomeDay(storeIncomeDays);
  }, []);

  return (
    <div>
      <Container>
        {incomeDay.map((item) => {
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

export default IncomeDay;
