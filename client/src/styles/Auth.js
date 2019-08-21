import styled from "styled-components";
import { NavLink } from "react-router-dom";

//Index.js
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4em;
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.8em;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #444444;
  padding: 0em 1em;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.3px;
`;
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

//SignUp.js && SignIn.js
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  width: 450px;
  margin: 2em;
  padding-bottom: 45px;

  @media (max-width: 768px) {
    border: none;
    margin: 30px 0 0 0;
    width: auto;
  }
`;

export const FormTitle = styled.h2`
  color: #444444;
  align-self: center;
  font-family: "Roboto", sans-serif;
`;

export const Input = styled.input`
  height: 28px;
  width: ${props => props.width};
  background: #ffffff;
  padding: 4px 0;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "#d9d9d9")};
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  align-self: center;
  font-family: "Roboto", sans-serif;
  padding-left: 6px;

  @media (max-width: 768px) {
    width: 88vw;
  }
`;
export const Error = styled.p`
  font-size: 10px;
  color: red;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2px;
  margin-top: 4px;
  text-align: left;
  width: 350px;
  align-self: center;

  @media (max-width: 768px) {
    width: 88vw;
  }
`;

export const Label = styled.label`
  color: #72767d;
  font-size: 11px;
  text-align: left;
  padding: 5px 0;
  width: 350px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: center;

  @media (max-width: 768px) {
    width: 88vw;
  }
`;

export const Button = styled.button`
  width: 350px;
  margin-top: 2em;
  text-align: center;
  height: 35px;
  border: 1px solid transparent;
  background-color: #1890ff;
  padding: 0 15px;
  border-radius: 4px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  outline: none;
  cursor: pointer;

  /* font properties */
  font-size: 13px;
  align-self: center;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;
