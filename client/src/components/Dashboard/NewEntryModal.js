import React, { Fragment, useState } from "react";
import axios from "axios";
import { Modal } from "../../styles/Dashboard";
import { Input, Button } from "../../styles/Landing";
import { Textarea } from "../../styles/Dashboard";
import useHandleEntrys from "../../customHooks/useHandleEntrys";
import { handleOpenModal } from "../../utils/utils";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "93%"
  },
  cancel: {
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#444444",
    outline: "none",
    float: "right",
    fontWeight: "700"
  }
};

export default ({ props }) => {
  const [isError, setError] = useState(false);
  const { setModalOpen, modalOpen } = props;
  const user = sessionStorage.getItem("user_id");
  const token = sessionStorage.getItem("token");

  const callback = inputs => {
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

  const { handleInputs, handleSubmit } = useHandleEntrys(callback);

  return (
    <Fragment>
      <Modal>
        <h3>Create a New Entry</h3>
        <div style={style.container}>
          <p>Title</p>
          <Input
            width={"100%"}
            autoFocus
            onChange={handleInputs}
            name="title"
            error={isError}
          />
        </div>
        <div style={style.container}>
          <p>Text</p>
          <Textarea name="text" onChange={handleInputs} error={isError} />
        </div>
        <Button onClick={handleSubmit}>Create</Button>
        <button
          style={style.cancel}
          onClick={() => handleOpenModal(setModalOpen, modalOpen)}
        >
          X
        </button>
      </Modal>
    </Fragment>
  );
};
