import React from 'react';
import './App.scss';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  );
}

export default App;
