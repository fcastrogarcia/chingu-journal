import { useState } from "react";
import { handleOpenModal } from "../utils/utils";
import axios from "axios";

export default props => {
  const [inputs, setInput] = useState({ title: "", text: "" });
  const [isError, setError] = useState(false);
  const { setModalOpen, modalOpen } = props;

  const user = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token");

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
    const { title, text } = inputs;
    const headers = { "access-token": token };
    axios
      .post("/api/posts/new", { user, title, text }, { headers })
      .then(res =>
        props.setEntrysData(data => [
          ...data,
          { title, text, _id: res.data._id }
        ])
      )
      .then(handleOpenModal(setModalOpen, modalOpen))
      .catch(() => setError(true));
  };

  return {
    inputs,
    handleInputs,
    handleSubmit,
    isError
  };
};
