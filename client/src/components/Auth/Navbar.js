import React from "react";
import { Navbar, LinksWrapper, StyledLink } from "../../styles/Auth";

const style = {
  link: { listStyle: "none", margin: "0 0.5em" }
};

export default () => (
  <Navbar>
    <LinksWrapper>
      <span style={style.link}>
        <StyledLink to="/signup" activeClassName="selected">
          Sign Up
        </StyledLink>
      </span>
      <span style={style.link}>
        <StyledLink activeClassName="selected" to="/signin">
          Sign In
        </StyledLink>
      </span>
    </LinksWrapper>
  </Navbar>
);
