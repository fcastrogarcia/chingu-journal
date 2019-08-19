import React, { useContext, useState, Fragment } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Fab, ModalLayout, LayoutWrapper } from "../../styles/Dashboard";
import NewEntryModal from "./NewEntryModal";
import Entry from "./Entry";
import Navbar from "./Navbar";
import useFetchEntrys from "../../customHooks/useFetchEntrys";
import { handleOpenModal } from "../../utils/utils";

const name = sessionStorage.getItem("user_name");

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = useContext(AuthContext).store;
  const { entrysData, setEntrysData } = useContext(AuthContext);

  useFetchEntrys(token, setEntrysData, entrysData);

  return (
    <Fragment>
      <Navbar name={name} />
      <LayoutWrapper>
        {entrysData.map((entry, index) => (
          <Entry {...entry} setEntrysData={setEntrysData} key={index} />
        ))}
        <Fab onClick={() => handleOpenModal(setModalOpen, modalOpen)}>+</Fab>
        {modalOpen && (
          <ModalLayout active>
            <NewEntryModal props={{ setModalOpen, setEntrysData, modalOpen }} />
          </ModalLayout>
        )}
      </LayoutWrapper>
    </Fragment>
  );
};
