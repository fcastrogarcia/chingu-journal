import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import useSignInForm from "../../customHooks/useSubmitForm";
import { AuthContext } from "../../context/AuthContext";
import { Form, Button, Layout } from "../../styles/Auth";
import InputRow from "./InputRow";
import { BarLoader } from "react-spinners";

const style = {
  wrapper: {
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    overflow: "hidden",
    width: "600px",
    margin: "2.5em",
    height: "350px",
    minHeight: "auto"
  },
  h2: {
    color: "#444444",
    alignSelf: "center"
  }
};

const SignIn = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleSubmit, handleLoginInputs, loginInputs } = useSignInForm(
    dispatch,
    props
  );
  const { signInErrors: errors, loading } = store;

  return (
    <Layout>
      <div style={style.wrapper}>
        <BarLoader width={620} color={!loading ? "#fff" : "#1890ff"} />
        <Form onSubmit={handleSubmit} id="login">
          <h2 style={style.h2}>Log In</h2>
          <InputRow
            type="email"
            name="email"
            value={loginInputs.email}
            onChange={handleLoginInputs}
            error={errors.email}
            text="Email"
          />
          <InputRow
            type="password"
            name="password"
            value={loginInputs.password}
            onChange={handleLoginInputs}
            error={errors.password}
            text="Password"
          />
          <Button type="submit">Sign In</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default withRouter(SignIn);
