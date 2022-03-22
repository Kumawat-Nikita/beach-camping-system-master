import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  userSession,
  permittedUser,
  ...otherProps
}) => (
  <Routes>
    <Route
      {...otherProps}
      render={(props) =>
        userSession.userType !== undefined ? (
          userSession.userType === "notLoggedIn" ? (
            <Navigate to="/api/login" />
          ) : userSession.userType === "loggedInUser" ? (
            <Component {...props} />
          ) : (
            <h1>unAuthorised Access</h1>
          )
        ) : (
          ""
        )
      }
    />
  </Routes>
);

export default PrivateRoute;
