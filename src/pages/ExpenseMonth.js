import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/expenseReducer";
import moment from "moment";
import { handleFetchExpenses } from "Containers/ecommerce/action";

const ExpenseMonth = () => {
  const expense = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const [datee, setDatee] = useState([]);

  useEffect(() => {
    dispatch(handleFetchExpenses());
    const months = [];
    console.log(expense);
    expense?.forEach((item) => {
      // const y = moment(item.date).format("YYYY");
      const m = moment(item.date).format("YYYY/MM");
      // const d = moment(item.date).format("DD");
      // console.log(y, m, d);
      if (months.includes(m)) {
        months.push(m);
      }
    });
    setDatee(months);
  }, []);
  console.log(datee);
  return (
    <div>
      {datee.map((item) => {
        let sum = 0;
        const thisMonthData = expense?.filter(
          (x) => moment(x.date).format("YYYY/MM") === item
        );
        thisMonthData.map((x) => {
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

export default ExpenseMonth;
