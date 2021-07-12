import React from "react";
import { Route } from "react-router-dom";

import Sidebar from "../pages/sidebar/Sidebar";
import Header from "../pages/header/Header";

const DashboardLayout = ({ children, ...rest }) => {
  return (
    <header class="app-header fixed-top">
      <Header />

      <Sidebar />

      <div>{children}</div>
    </header>
  );
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

export default DashboardLayoutRoute;
