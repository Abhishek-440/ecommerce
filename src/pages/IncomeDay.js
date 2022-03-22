import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { retrieveIncome } from "Containers/ecommerce/action";
import { selectIncomes } from "Containers/ecommerce/IncomeReducer";
import { ListGroup, Badge } from "react-bootstrap";

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
      {incomeDay.map((item) => {
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

export default IncomeDay;
