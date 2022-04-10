import './App.less';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import RoutePaths from './Paths/Routes';
import Footer from "./components/Footer/Footer"
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutePaths />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
