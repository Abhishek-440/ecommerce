import React, { useEffect, useState } from "react";
import { handleFetchExpenses } from "Containers/ecommerce/action";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/ExpenseReducer";
import moment from "moment";

const ExpenseDay = () => {
  const expense = useSelector(selectExpenses);
  const [dayy, setDayy] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleFetchExpenses());
    const days = [];

    expense?.forEach((item) => {
      const d = moment(item.date).format("YYYY/MM/DD");
      if (!days.includes(d)) {
        days.push(d);
      }
    });
    setDayy(days);
  }, []);
  return (
    <div>
      {dayy.map((item) => {
        let sum = 0;
        const thisDayData = expense?.filter(
          (x) => moment(x.date).format("YYYY/MM/DD") === item
        );
        thisDayData.map((x) => {
          return (sum += x.amount);
        });
        return (
          // eslint-disable-next-line react/jsx-key
          <li>
            {item} : {sum}{" "}
          </li>
        );
      })}
    </div>
  );
};

export default ExpenseDay;
