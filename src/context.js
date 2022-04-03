import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repoData, setRepoData] = useState([]);
  const [repoImages, setRepoImages] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        repoData,
        setRepoData,
        repoImages,
        setRepoImages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// here we are creating a custom hook
// use of the word use is required to be able to use the hook due to useContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
