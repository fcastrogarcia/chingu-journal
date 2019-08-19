import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

const loading = state => {
  return {
    type: "LOADING",
    payload: state
  };
};

const registerUser = (inputs, setInputs, dispatch, props) => {
  //render bar loader
  dispatch(loading(true));
  //api call
  axios
    .post("/api/users/register", inputs)
    .then(() => dispatch({ type: "USER_REGISTERED" }))
    .then(() => setInputs({ name: "", email: "", password: "", password2: "" }))
    .then(() => dispatch(loading(false)))
    .then(() => props.history.push("/signin"))
    .catch(err =>
      dispatch({ type: "SIGN_UP_ERRORS", payload: err.response.data })
    )
    .then(() => dispatch(loading(false)));
};

const loginUser = async (inputs, dispatch, props) => {
  dispatch(loading(true));
  await axios
    .post("/api/users/login", inputs)
    .then(res => {
      const { token } = res.data;
      const parsed = token.split("Bearer ")[1];
      const decoded = jwt_decode(token);
      console.log(decoded);
      //set localstorage items
      sessionStorage.setItem("token", parsed);
      sessionStorage.setItem("user_name", decoded.name);
      sessionStorage.setItem("user_id", decoded.id);

      dispatch({ type: "USER_AUTHENTICATED", payload: { decoded, parsed } });
    })
    .then(() => dispatch(loading(false)))
    .then(() => props.history.push("/dashboard"))
    .catch(err =>
      dispatch({ type: "SIGN_IN_ERRORS", payload: err.response.data })
    )
    .then(() => dispatch(loading(false)));
};

export default (dispatch, props) => {
  const [registerInputs, setRegisterInputs] = useState({});
  const [loginInputs, setLoginInputs] = useState({});

  const handleSubmit = e => {
    e && e.preventDefault();
    e.target.id === "registration"
      ? registerUser(registerInputs, setRegisterInputs, dispatch, props)
      : loginUser(loginInputs, dispatch, props);
  };

  const handleLoginInputs = e => {
    e.persist();
    setLoginInputs(loginInputs => ({
      ...loginInputs,
      [e.target.name]: e.target.value
    }));
  };
  const handleRegisterInputs = e => {
    e.persist();
    setRegisterInputs(registerInputs => ({
      ...registerInputs,
      [e.target.name]: e.target.value
    }));
  };
  return {
    handleSubmit,
    handleLoginInputs,
    handleRegisterInputs,
    registerInputs,
    loginInputs
  };
};
