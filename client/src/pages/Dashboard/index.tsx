// import node modules
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// import mui components
import { Box } from "@mui/material";

// import styles
import { DashboardPageStyle } from "./index.style";

// redux
import { RootState } from '../../redux/store';
import { Logout } from "../../redux/slices/user.slice";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { me, users } = useSelector((state: RootState) => state.user);

  const logout = () => {
    dispatch(Logout({ next: () => navigate("/signin") }))
  };

  return (
    <DashboardPageStyle>
      <Box className="logout-text" onClick={logout}>Logout</Box>
      <h1>Welcome {me.email} to Lithium</h1>

      <h2>User List</h2>
      {users.map((item, index) => (
        <h3 key={index}>{index + 1}. {item.email}</h3>
      ))}
    </DashboardPageStyle>
  );
};

export default DashboardPage;
