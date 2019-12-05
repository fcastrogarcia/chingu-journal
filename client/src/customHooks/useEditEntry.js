import { useState } from "react";
import axios from "axios";
import { handleOpenModal } from "../utils/utils";

export default props => {
  //context values
  const { text, title } = props;
  //component state copy of context state for editing
  const [inputs, setInputs] = useState({ title, text });
  const [editEntry, setEditEntry] = useState(false);

  const token = sessionStorage.getItem("token");
  const headers = { "access-token": token };

  const handleInputs = e => {
    setInputs(inputs => ({
      ...inputs,
      [e.currentTarget.id]: e.currentTarget.innerText
    }));
  };
  //restore original values & close entry modal
  const discardChanges = () => {
    setInputs({ title, text });
    handleOpenModal(setEditEntry, editEntry);
  };

  const saveChanges = () => {
    //refresh context with edited data
    props.setEntrysData(prevData =>
      prevData.map(entry => {
        if (entry._id === props._id) {
          entry.title = inputs.title;
          entry.text = inputs.text;
        }
        return entry;
      })
    );
    //close modal
    handleOpenModal(setEditEntry, editEntry);
    //actualize entry in db
    const data = {
      postId: props._id,
      title: inputs.title,
      text: inputs.text
    };
    axios.put("/api/posts/edit", data, { headers });
  };

  //delete entry
  const deleteEntry = () => {
    props.setEntrysData(prevData =>
      prevData.filter(entry => entry._id !== props._id)
    );
    handleOpenModal(setEditEntry, editEntry);
    const data = {
      postId: props._id
    };
    axios.delete("/api/posts/delete", data, { headers });
  };

  return {
    inputs,
    handleInputs,
    editEntry,
    saveChanges,
    discardChanges,
    deleteEntry
  };
};
