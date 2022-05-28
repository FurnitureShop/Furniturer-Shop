import './App.less';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutePaths from './Paths/Routes';
import MainLayout from 'components/MainLayout';
import "./App.scss"

function App() {
  return (
    <BrowserRouter> 
      <MainLayout>
        <RoutePaths />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
