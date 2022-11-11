import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import IndexComponent from './components/index.component/index.component';
import DetailComponent from './components/detail.component/detail.component';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <IndexComponent />} />
        <Route path='immovable/:immovableId' element={ <DetailComponent />} />
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
