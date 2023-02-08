//node_modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import LayoutComponent from "./layout";

// import pages
import { SignInPage, SignUpPage, DashboardPage } from "./pages"

// import constants
import { PATH } from "./constants";

const AppRoutes = () => {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/*" element={<SignInPage />}></Route>
        <Route path={PATH.LOGIN} element={<SignInPage />}></Route>
        <Route path={PATH.REGISTER} element={<SignUpPage />}></Route>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />}></Route>
      </Routes>
    </LayoutComponent>
  );
};

export default AppRoutes;
