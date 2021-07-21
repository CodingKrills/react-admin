import React from "react";
import { Route } from "react-router-dom";

const LoginLayout = ({ children }) => <div>{children}</div>;

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <LoginLayout />
          <Component {...matchProps} />
        </>
      )}
    />
  );
};

export default LoginLayoutRoute;
