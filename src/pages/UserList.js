import UsersCard from "components/organisms/Card/UsersCard";
import { handleFetchUsers } from "Containers/ecommerce/action";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchUsers());
  }, []);
  return (
    <div className="text-center">
      <h1>UserList</h1>
      <Row>
        {user?.map((item, userId) => (
          <UsersCard
            key={userId}
            id={item.id}
            name={item.name}
            address={item.address}
            email={item.email}
            phone={item.phone}
            date_of_birth={item.date_of_birth}
            profile_picture={item.profile_picture}
          />
        ))}
      </Row>
    </div>
  );
};

export default UserList;
