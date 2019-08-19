import React, { Fragment } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ContentEditable from "react-contenteditable";
import {
  Entry,
  Text,
  ModalLayout,
  textStyle,
  IconsWrapper
} from "../../styles/Dashboard";
import useEditEntry from "../../customHooks/useEditEntry";

export default props => {
  //context
  const { text, title } = props;

  const {
    handleInputs,
    saveChanges,
    discardChanges,
    deleteEntry,
    inputs,
    editEntry
  } = useEditEntry(props);

  return (
    <Fragment>
      <ModalLayout active={editEntry}>
        <Entry open={editEntry}>
          <ContentEditable
            html={`<h3>${inputs.title}</h3>`}
            onChange={handleInputs}
            id="title"
            style={{ minHeight: "25px", outline: "none" }}
          />
          <Scrollbars autoHide>
            <ContentEditable
              html={`<p>${inputs.text}</p>`}
              onChange={handleInputs}
              style={textStyle}
              id="text"
            />
          </Scrollbars>
        </Entry>
        <IconsWrapper>
          <i className="fas fa-save" onClick={saveChanges} />
          <i className="fas fa-trash" onClick={deleteEntry} />
          <i className="fas fa-times" onClick={discardChanges} />
        </IconsWrapper>
      </ModalLayout>
      {!editEntry && (
        <Entry onClick={discardChanges} open={editEntry}>
          <h3>{title}</h3>
          <Scrollbars autoHide>
            <Text>{text}</Text>
          </Scrollbars>
        </Entry>
      )}
    </Fragment>
  );
};


