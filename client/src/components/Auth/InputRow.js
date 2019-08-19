import React, { Fragment } from "react";
import { Input, Error, Label } from "../../styles/Auth";

const style = {
  rowWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1em 0"
  }
};
export default ({ type, name, value, onChange, error, text }) => (
  <Fragment>
    <div style={style.rowWrapper}>
      <Label>{text}</Label>
      <div>
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          error={error}
          width={"350px"}
        />
        <Error>{error}</Error>
      </div>
    </div>
  </Fragment>
);
