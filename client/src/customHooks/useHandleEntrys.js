import { useState } from "react";

export default callback => {
  const [inputs, setInput] = useState({ title: "", text: "" });

  const handleInputs = e => {
    e.persist();
    setInput(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }));
    console.log(inputs);
  };
  const handleSubmit = e => {
    e.preventDefault();
    callback(inputs);
  };
  return {
    inputs,
    handleInputs,
    handleSubmit
  };
};
