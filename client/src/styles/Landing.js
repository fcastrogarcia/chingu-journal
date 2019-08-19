import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Landing.js
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4em;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.8em;
  border-bottom: 1px solid #dadce0;
`;
export const ListItem = styled.span`
  list-style: none;
  margin: 0 0.5em;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #444444;
  padding: 0em 1em;
  font-family: "Roboto Mono", monospace;
`;
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

//SignUp.js && SignIn.js
export const Text = styled.p`
  margin: 4px auto;
  font-family: "Roboto Mono", monospace;
`;
export const Error = styled(Text)`
  font-size: 12px;
  color: red;
  position: absolute;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 50px 50px 50px;
  width: auto;
`;
export const Input = styled.input`
  height: 28px;
  width: ${props => props.width};
  background: #ffffff;
  padding: 4px 11px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "#d9d9d9")};
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
`;
export const Label = styled.label`
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  text-align: right;
  padding: 10px 0;
  width: 150px;
  margin-right: 1em;
  min-width: 115px;
  font-family: "Roboto Mono", monospace;
`;
export const Button = styled.button`
  width: 7em;
  margin-top: 3em;
  text-align: center;
  height: 32px;
  border: 1px solid transparent;
  background-color: #1890ff;
  color: #fff;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  outline: none;
  cursor: pointer;
  align-self: center;
  font-family: "Roboto Mono", monospace;
`;
