import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import useSignInForm from "../../customHooks/useSubmitForm";
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

const SignIn = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleSubmit, handleLoginInputs, loginInputs } = useSignInForm(
    dispatch,
    props
  );
  const { signInErrors: errors, loading } = store;

  return (
    <Layout>
      <FormWrapper>
        <BarLoader
          width={450}
          color={!loading ? "#fff" : "#1890ff"}
          css={override}
        />
        <Form onSubmit={handleSubmit} id="login">
          <FormTitle>Log In</FormTitle>
          <InputBlock
            type="email"
            name="email"
            value={loginInputs.email}
            onChange={handleLoginInputs}
            error={errors.email}
            text="Email"
          />
          <InputBlock
            type="password"
            name="password"
            value={loginInputs.password}
            onChange={handleLoginInputs}
            error={errors.password}
            text="Password"
          />
          <Button type="submit" width={"350px"}>
            Sign In
          </Button>
        </Form>
      </FormWrapper>
    </Layout>
  );
};

export default withRouter(SignIn);
