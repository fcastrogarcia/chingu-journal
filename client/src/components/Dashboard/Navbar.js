import React from "react";
import { Navbar, StyledLik } from "../../styles/Dashboard";

export default ({ name }) => {
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
  };

  return (
    <Navbar>
      <p style={{ fontWeight: "500", fontFamily: `'Roboto', sans-serif` }}>
        <span role="img" aria-label="hello">
          👋
        </span>{" "}
        Welcome, {name}{" "}
      </p>
      <StyledLik to="/signin" onClick={handleSignOut}>
        Sign Out
      </StyledLik>
    </Navbar>
  );
};
