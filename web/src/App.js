import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';
import Home from './components/Home';

const App = () => (
  <Router>
    <Route path="/dashboard" component={ Dashboard } />
    <Route exact path="/" component={ Home } />
  </Router>
)

export default App;
