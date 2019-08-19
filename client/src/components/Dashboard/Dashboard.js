import React, { useContext, useState, Fragment } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Fab, ModalLayout, Layout } from "../../styles/Dashboard";
import NewEntryModal from "./NewEntryModal";
import Entry from "./Entry";
import Navbar from "./Navbar";
import useFetchEntrys from "../../customHooks/useFetchEntrys";
import { handleOpenModal } from "../../utils/utils";

const style = {
  color: "rgba(68, 68, 76, 0.3)",
  marginLeft: "2em"
};

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
        {entrysData.length === 0 && <h1 style={style}>Take note.</h1>}
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
