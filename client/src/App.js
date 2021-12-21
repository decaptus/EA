import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FlatInfo from './pages/FlatInfo'
import Flats from './pages/Flats';
import Lessons from './pages/Lessons';
import Forum from './pages/Forum';
import LogIn from './pages/LogIn';
import Support from './pages/Support';
import Chat from './pages/chat/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          
          <Route path='/' exact component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/lessons' component={Lessons} />
          <Route path='/forum' component={Forum} />          
          <Route path='/flats' component={Flats} />
          <Route path='/flatinfo' component={FlatInfo} />
          <Route path='/support' component={Support} />
          <Route path='/chat' component={Chat} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;