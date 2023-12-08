import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
