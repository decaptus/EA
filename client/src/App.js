import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Forum from './pages/Forum';
import LogIn from './pages/LogIn';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/lessons' component={Lessons} />
          <Route path='/forum' component={Forum} />
          <Route path='/support' component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;