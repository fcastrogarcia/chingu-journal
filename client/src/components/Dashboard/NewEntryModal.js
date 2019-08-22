import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Modal } from "../../styles/Dashboard";
import { Input, Button, Label, FormTitle } from "../../styles/Auth";
import { Textarea } from "../../styles/Dashboard";
import useCreateEntry from "../../customHooks/useCreateEntry";
import { handleOpenModal } from "../../utils/utils";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start"
  }
};

export default ({ props }) => {
  const { store } = useContext(AuthContext);
  const { setModalOpen, modalOpen } = props;

  const { handleInputs, handleSubmit, isError } = useCreateEntry(props, store);

  return (
    <Fragment>
      <Modal>
        <FormTitle style={{ marginTop: "50px" }}>Create a New Entry</FormTitle>
        <div style={style.container}>
          <Label width={"410px"} fontSize={"13px"} margin={"10px 0 0 0"}>
            Title
          </Label>
          <Input
            width={"410px"}
            autoFocus
            onChange={handleInputs}
            name="title"
            error={isError}
          />
        </div>
        <div style={style.container}>
          <Label width={"410px"} fontSize={"13px"} margin={"10px 0 0 0"}>
            Text
          </Label>
          <Textarea name="text" onChange={handleInputs} error={isError} />
        </div>
        <div>
          <Button
            onClick={handleSubmit}
            width={"100px"}
            margin={"25px 10px 0px 0px"}
          >
            Create
          </Button>
          <Button
            onClick={() => handleOpenModal(setModalOpen, modalOpen)}
            width={"100px"}
            backgroundColor={"whitesmoke"}
            color={"#444444"}
            margin={"25px 10px 0px 0px"}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </Fragment>
  );
};
