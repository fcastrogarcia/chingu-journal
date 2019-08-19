import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import useSignUpForm from "../../customHooks/useSubmitForm";
import { AuthContext } from "../../context/AuthContext";
import { Form, Button, Layout } from "../../styles/Landing";
import InputRow from "./InputRow";
import { BarLoader } from "react-spinners";

const style = {
  wrapper: {
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
    overflow: "none",
    width: "600px",
    margin: "2em",
    height: "500px"
  },
  h2: {
    color: "#444444",
    alignSelf: "center"
  }
};

const SignUp = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleSubmit, handleRegisterInputs, registerInputs } = useSignUpForm(
    dispatch,
    props
  );
  const { signUpErrors: errors, loading } = store;

  return (
    <Layout>
      <div style={style.wrapper}>
        <BarLoader width={620} color={!loading ? "#fff" : "#1890ff"} />
        <Form onSubmit={handleSubmit} id="registration">
          <h2 style={style.h2}>Register</h2>
          <InputRow
            type="text"
            name="name"
            value={registerInputs.name}
            onChange={handleRegisterInputs}
            error={errors.name}
            text="Name"
          />
          <InputRow
            type="email"
            name="email"
            value={registerInputs.email}
            onChange={handleRegisterInputs}
            error={errors.email}
            text="Email"
          />
          <InputRow
            type="password"
            name="password"
            value={registerInputs.password}
            onChange={handleRegisterInputs}
            error={errors.password}
            text="Password"
          />
          <InputRow
            type="password"
            name="password2"
            value={registerInputs.password2}
            onChange={handleRegisterInputs}
            error={errors.password2}
            text="Repeat Password"
          />
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default withRouter(SignUp);
