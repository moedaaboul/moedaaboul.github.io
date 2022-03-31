import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
function App() {
  const [page, setPage] = useState('contact');

  return (
    <>
      <Navbar setPage={setPage} />
      {page === 'home' && <Home />}
      {page === 'contact' && <Contact />}
    </>
  );
}

export default App;
