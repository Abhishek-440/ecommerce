import React, { useEffect, useState } from "react";
import moment from "moment";
import { ListGroup, Badge } from "react-bootstrap";
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
      {incomeMonth.map((item) => {
        let sum = 0;
        const thisDayData = income?.filter(
          (x) => moment(x.date).format("YYYY/MM/DD") === item
        );
        thisDayData.map((x) => {
          return (sum += x.amount);
        });
        return (
          // eslint-disable-next-line react/jsx-key
          <ListGroup as="ol" className="h-100 row algn-items-center">
            <ListGroup.Item as="li" className="d-flex align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Date</div>
                {item} :{"  "}
                <Badge bg="primary" pill>
                  {sum}
                </Badge>
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
};

export default IncomeMonth;
