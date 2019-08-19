import React from "react";
import { Navbar } from "../../styles/Dashboard";

export default ({ name }) => (
  <Navbar>
    <p style={{ fontWeight: "500" }}>Welcome, {name} </p>
  </Navbar>
);
