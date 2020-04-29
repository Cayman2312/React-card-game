import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Rules from './components/Rules';
import About from './components/About';
import Game from './containers/Game';

let timer, timeout;

export default class App extends React.Component {
  state = {
    gameStarted: false,
    timeLeft: null,
    gameStatus: '',
  };

  startGame() {
    if (!this.state.gameStarted || this.state.gameStatus === 'restart') {
      this.setState({ gameStarted: true, gameStatus: '' });
    } else if (window.confirm('Вы действительно хотите начать заново?')) {
      clearInterval(timer);
      clearTimeout(timeout);
      this.setState({
        gameStatus: 'restart',
        timeLeft: null,
      });
      setTimeout(() => {
        this.startGame();
      }, 100);
    }
  }

  setTimeLeft(number) {
    const timer = number * 3;
    this.setState({ timeLeft: timer });
    this.startTimer();
    timeout = setTimeout(() => {
      this.setState({ gameStatus: 'lose' });
    }, timer * 1000);
  }

  startTimer() {
    timer = setInterval(() => {
      this.setState((prevState) => {
        return { timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  }

  winGame() {
    this.setState({ gameStatus: 'win' });
  }

  componentWillUnmount() {
    clearInterval(timer);
    clearTimeout(timeout);
  }

  componentDidUpdate() {
    if (
      (this.state.timeLeft !== null && this.state.timeLeft <= 0) ||
      this.state.gameStatus === 'win'
    ) {
      clearInterval(timer);
    }
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
                if (this.state.gameStatus === 'win') {
                  return <h1>Поздравляем, Вы победили!</h1>;
                } else if (this.state.gameStatus === 'lose') {
                  return (
                    <h1>К сожалению Вы не успели за отведенное время...</h1>
                  );
                } else
                  return (
                    <Game
                      setTimeLeft={this.setTimeLeft.bind(this)}
                      isStarted={this.state.gameStarted}
                      winGame={this.winGame.bind(this)}
                      gameStatus={this.state.gameStatus}
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
