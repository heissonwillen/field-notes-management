import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard';

const App = () => (
  <Router>
    <Route path="/dashboard" component={ Dashboard } />
  </Router>
)

export default App;
