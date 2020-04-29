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
    gameStarted: false,
    timeLeft: null,
  };

  startGame() {
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true });
    } else if (window.confirm('Вы действительно хотите начать заново?')) {
      this.setState({ gameStarted: false });
      setTimeout(() => {
        document.getElementById('newGame').click();
      }, 100);
    }
  }

  setTimeLeft(number) {
    this.setState({ timeLeft: number * 3 });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header
            startGame={this.startGame.bind(this)}
            isStarted={this.state.gameStarted}
            timeLeft={this.state.timeLeft}
          />
          <hr />
          <Switch>
            <Route
              path="/game"
              render={() => {
                return (
                  <Game
                    setTimeLeft={this.setTimeLeft.bind(this)}
                    isStarted={this.state.gameStarted}
                  />
                );
              }}
            />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
            <Route
              path="/"
              exact
              render={() => {
                return <Main startGame={this.startGame.bind(this)} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
