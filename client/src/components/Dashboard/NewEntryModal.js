import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Modal } from "../../styles/Dashboard";
import { Input, Button } from "../../styles/Auth";
import { Textarea } from "../../styles/Dashboard";
import useCreateEntry from "../../customHooks/useCreateEntry";
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
  const { store } = useContext(AuthContext);
  const { setModalOpen, modalOpen } = props;

  const { handleInputs, handleSubmit, isError } = useCreateEntry(props, store);

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
