import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-dom';
import Search from './components/search/Search';
import Index from './components/home/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
