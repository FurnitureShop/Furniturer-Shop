import './App.less';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Paths/Routes';
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
