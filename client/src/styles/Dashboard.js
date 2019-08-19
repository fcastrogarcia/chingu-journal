import styled from "styled-components";

export const Fab = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  margin: 25px;
  background-color: #3483fa;
  border: none;
  outline: none;
  font-size: 28px;
  color: #fff;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #1976d2;
  }
`;

export const Modal = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 400px;
  height: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 25px;
  opacity: 1;
`;
export const ModalLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity ease 0.9s;
  display: ${props => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  z-index: 1;
`;

export const Textarea = styled.textarea`
  height: 110px;
  width: 100%;
  padding: 4px 11px;
  font-size: 14px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.error ? "red" : "#d9d9d9")};
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
`;

export const Entry = styled.div`
  border: 1px solid #e0e0e0;
  position: ${props => (props.open ? "absolute" : "")};
  background: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: hidden;
  transition: all ease-in-out 0.7;
  height: ${props => (props.open ? "30em" : "20em")};
  width: ${props => (props.open ? "30em" : "17em")};
  padding: ${props =>
    props.open ? "4px 15px 72px 15px" : "4px 15px 75px 15px"};
  margin: 10px 10px;
  outline: none;
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
`;

export const Text = styled.div`
  font-size: 0.875rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  line-height: 1.25rem;
  color: #444444;
  height: auto;
  word-break: break-word;
  text-align: ${props => (props.active ? "justify" : "left")};
  margin: ${props => (props.active ? "1em" : "0")};
`;

//text style for ContentEditable component
export const textStyle = {
  fontSize: "0.875rem",
  outline: "none",
  fontWeight: "400",
  color: "rgba(0,0,0,0.6)",
  wordBreak: "break-word",
  lineheight: "1.25rem",
  fontFamily: `'Roboto', monospace`,
  margin: "1em",
  overflowY: "hidden",
  textAlign: "left",
  minHeight: "27em"
};

export const IconsWrapper = styled.div`
  position: relative;
  bottom: -265px;
  left: 10px;
  margin: 10px 10px;
  display: flex;
  background-color: #3483fa;
  padding: 15px 0;
  width: 30em;
  justify-content: space-around;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const Navbar = styled.nav`
  position: relative;
  padding: 0 2em;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.5em;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  color: #444444;
  margin-top: 1em;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
