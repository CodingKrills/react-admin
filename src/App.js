import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// * Layouts
import LoginLayoutRoute from "./layouts/LoginLayout";
import DashboardLayoutRoute from "./layouts/DashboardLayout";

// * Pages
import Signin from "./pages/signin/Signin";
import Product from "./pages/products/Product";
import Order from "./pages/orders/Order";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import AddProduct from "./pages/products/AddProduct";
import DeliveryZones from "./pages/delivery_zones/DeliveryZones";
import User from "./pages/user/User";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <LoginLayoutRoute path="/login" component={Signin} exact />
        <DashboardLayoutRoute path="/dashboard" component={Dashboard} exact />
        <DashboardLayoutRoute
          path="/dashboard/products"
          component={Product}
          exact
        />
        <DashboardLayoutRoute
          path="/dashboard/products/add"
          component={AddProduct}
          exact
        />
        <DashboardLayoutRoute path="/dashboard/order" component={Order} exact />
        <DashboardLayoutRoute
          path="/dashboard/category"
          component={Category}
          exact
        />
        <DashboardLayoutRoute
          path="/dashboard/delivery_zones"
          component={DeliveryZones}
          exact
        />
        <DashboardLayoutRoute
          path="/dashboard/users"
          component={User}
          exact
        />
      </Switch>
    </Router>
  );
};

export default App;
