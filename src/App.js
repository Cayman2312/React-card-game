import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Rules from './components/Rules';
import About from './components/About';
import Game from './containers/Game';

export default class App extends React.Component {
  state = {
    gameStarted: true,
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header isStarted={this.state.gameStarted} />
          <hr />
          <Switch>
            <Route
              path="/game"
              render={() => {
                return <Game isStarted={this.state.gameStarted} />;
              }}
            />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Main} />
          </Switch>
        </div>
      </div>
    );
  }
}
