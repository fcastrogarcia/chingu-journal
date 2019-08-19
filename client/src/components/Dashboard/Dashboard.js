import React, { useContext, useState, Fragment } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Fab, ModalLayout, Layout } from "../../styles/Dashboard";
import NewEntryModal from "./NewEntryModal";
import Entry from "./Entry";
import Navbar from "./Navbar";
import useFetchEntrys from "../../customHooks/useFetchEntrys";
import { handleOpenModal } from "../../utils/utils";

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { store, dispatch, entrysData, setEntrysData } = useContext(
    AuthContext
  );

  useFetchEntrys(store.token, setEntrysData, dispatch);

  return (
    <Fragment>
      <Navbar name={store.user.name} />
      <Layout>
        {entrysData.map((entry, index) => (
          <Entry {...entry} setEntrysData={setEntrysData} key={index} />
        ))}
        <Fab onClick={() => handleOpenModal(setModalOpen, modalOpen)}>+</Fab>
        {modalOpen && (
          <ModalLayout active>
            <NewEntryModal props={{ setModalOpen, setEntrysData, modalOpen }} />
          </ModalLayout>
        )}
      </Layout>
    </Fragment>
  );
};
