import './App.less';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutePaths from './paths/Routes';
//import MainLayout from 'components/MainLayout';
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <RoutePaths />
    </BrowserRouter>
  );
}

export default App;
