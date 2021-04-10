import React, { createContext, useState } from "react";
import sublinks from "constant/links";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [links, setLinks] = useState(sublinks);
  const [modalData, setModalData] = useState({ text: null, type: null });
  const [isModalOpen, setModalOpen] = useState(false);
  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const showModal = (text, type) => {
    setModalData({ text, type });
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalData({ text: null, type: null });
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        modalData,
        isSidebarOpen,
        modalData,
        showSidebar,
        closeSidebar,
        links,
        showModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
