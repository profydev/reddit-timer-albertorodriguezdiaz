import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/search/Search';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Routes>
    </Router>
  );
}

export default App;
