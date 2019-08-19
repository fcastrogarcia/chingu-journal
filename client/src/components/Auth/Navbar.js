import React from "react";
import { Navbar, List, ListItem, StyledLink } from "../../styles/Auth";

export default () => (
  <Navbar>
    <List>
      <ListItem>
        <StyledLink to="/signup" activeClassName="selected active">
          Sign Up
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink activeClassName="selected active" to="/signin">
          Sign In
        </StyledLink>
      </ListItem>
    </List>
  </Navbar>
);
