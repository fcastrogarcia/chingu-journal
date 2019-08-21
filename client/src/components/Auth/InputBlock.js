import React, { Fragment } from "react";
import { Input, Label, Error } from "../../styles/Auth";

const style = {
  wrapper: {
    display: "flex",
    height: "auto",
    width: "350px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }
};
export default ({ type, name, value, onChange, error, text }) => (
  <Fragment>
    <div style={style.wrapper}>
      <Label>{text}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        width={"350px"}
      />
      <Error>{error} </Error>
    </div>
  </Fragment>
);
