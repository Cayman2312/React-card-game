import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Rules from './components/Rules';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <hr />
        <Switch>
          <Route path="/game" component={Main} />
          <Route path="/rules" component={Rules} />
          <Route path="/about" component={About} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
