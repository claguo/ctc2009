import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TimeGrid from './pages/TimeGrid';
import Repetition from './pages/Repetition';
import './App.css';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/ctc2009' element={<Home />} />
          <Route path='/ctc2009/indeterminacy' element={<TimeGrid />} />
          <Route path='/ctc2009/repetition' element={<Repetition />} />
        </Routes>
    </Router>
  );
}

export default App;
