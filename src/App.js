import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Modal from './pages/Modal';
import { useGlobalContext } from './context';

function App() {
  const [page, setPage] = useState('home');
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      <Header setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'contact' && <Contact />}
      {page === 'portfolio' && <Portfolio />}
      {isModalOpen && <Modal />}
    </>
  );
}

export default App;
