import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'contact' && <Contact />}
    </>
  );
}

export default App;
