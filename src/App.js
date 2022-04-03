import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Modal from './Modal';
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
