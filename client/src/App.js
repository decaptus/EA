import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flats from './pages/Flats';
import Lessons from './pages/Lessons';
import Forum from './pages/Forum';
import LogIn from './pages/LogIn';
import Support from './pages/Support';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          {/* <Route path='/' exact component={LogIn} /> */}
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/lessons' component={Lessons} />
          <Route path='/forum' component={Forum} />          
          <Route path='/flats' component={Flats} />
          <Route path='/support' component={Support} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;