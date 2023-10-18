import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TimeGrid from './pages/TimeGrid';
import Repetition from './pages/Repetition';
import './App.css';
import ForMachine from './components/ForMachine';
import Interaction from './components/Interaction';
import FishMaker from './components/mapping/FishMaker';

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/ctc2009' element={<Home />} />
          <Route path='/ctc2009/indeterminacy' element={<TimeGrid />} />
          <Route path='/ctc2009/repetition' element={<Repetition />} />
          <Route path='/ctc2009/mapping' element={<FishMaker />} />
          <Route path='/ctc2009/interaction' element={<Interaction />} />
          <Route path='*' element={<ForMachine />} />
        </Routes>
    </Router>
  );
}

export default App;
