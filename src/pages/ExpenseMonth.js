import React from "react";
import { useSelector } from "react-redux";
import { selectExpenses } from "Containers/ecommerce/reducer";
import { Row } from "react-bootstrap";
import { CardComponent } from "components/organisms/Card";

const ExpenseMonth = () => {
  const expense = useSelector(selectExpenses);
  return (
    <div>
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
    </div>
  );
};

export default ExpenseMonth;
