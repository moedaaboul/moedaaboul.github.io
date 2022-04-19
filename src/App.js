import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Modal from './pages/Modal';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import { useGlobalContext } from './providers/GlobalStateProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [page, setPage] = useState('home');
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      {isModalOpen && <Modal />}
      <Footer />
    </>
  );
}

export default App;
