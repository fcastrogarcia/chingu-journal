import React, { useContext, useState, Fragment } from "react";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import { Fab, ModalLayout, Layout } from "../../styles/Dashboard";
import NewEntryModal from "./NewEntryModal";
import Entry from "./Entry";
import Navbar from "./Navbar";
import useFetchEntrys from "../../customHooks/useFetchEntrys";
import { handleOpenModal } from "../../utils/utils";

const style = {
  color: "rgba(68, 68, 76, 0.3)"
};

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { store, dispatch, entrysData, setEntrysData } = useContext(
    AuthContext
  );
  const { user, loading } = store;

  useFetchEntrys(store.token, setEntrysData, dispatch);

  return (
    <Fragment>
      <Navbar name={user.name} />
      <Layout>
        {entrysData.length === 0 && !loading && (
          <h1 style={style}>Take note.</h1>
        )}
        <SyncLoader
          loading={store.loading}
          color={"rgba(79, 149, 255, 0.7)"}
          css={{ position: "absolute", left: "50%", top: "50%" }}
        />
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
