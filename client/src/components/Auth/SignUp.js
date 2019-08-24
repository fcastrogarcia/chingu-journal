import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import useSignUpForm from "../../customHooks/useSubmitForm";
import { AuthContext } from "../../context/AuthContext";
import {
  Form,
  Button,
  Layout,
  FormTitle,
  FormWrapper,
  override
} from "../../styles/Auth";
import InputBlock from "./InputBlock";
import { BarLoader } from "react-spinners";

const SignUp = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleSubmit, handleRegisterInputs, registerInputs } = useSignUpForm(
    dispatch,
    props
  );
  const { signUpErrors: errors, loading } = store;

  return (
    <Layout>
      <FormWrapper>
        <BarLoader
          width={450}
          color={!loading ? "#fff" : "#1890ff"}
          css={override}
        />
        <Form onSubmit={handleSubmit} id="registration">
          <FormTitle>Register</FormTitle>
          <InputBlock
            type="text"
            name="name"
            value={registerInputs.name}
            onChange={handleRegisterInputs}
            error={errors.name}
            text="Name"
          />
          <InputBlock
            type="email"
            name="email"
            value={registerInputs.email}
            onChange={handleRegisterInputs}
            error={errors.email}
            text="Email"
          />
          <InputBlock
            type="password"
            name="password"
            value={registerInputs.password}
            onChange={handleRegisterInputs}
            error={errors.password}
            text="Password"
          />
          <InputBlock
            type="password"
            name="password2"
            value={registerInputs.password2}
            onChange={handleRegisterInputs}
            error={errors.password2}
            text="Repeat Password"
          />
          <Button type="submit" width={"350px"}>
            Sign Up
          </Button>
        </Form>
      </FormWrapper>
    </Layout>
  );
};

export default withRouter(SignUp);
