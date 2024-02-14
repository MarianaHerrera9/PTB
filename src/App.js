import React from 'react';
import './App.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './pages/Home/Home';
import Peliculas from './pages/Peliculas/Peliculas';
import Series from './pages/Series/Series';
import Error from './pages/Error/Error';
import Loading from './pages/Loading/Loading';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/series" element={<Series />} />
          <Route path="/error" element={<Error />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
