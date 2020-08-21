import React from 'react'
import './App.scss'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import Rules from './components/Rules'
import About from './components/About'
import Game from './containers/Game'

let timer, timeout

class App extends React.Component {
  state = {
    gameStarted: false,
    timeLeft: null,
    gameStatus: '',
  }

  startGame = () => {
    if (!this.state.gameStarted || this.state.gameStatus === 'restart') {
      this.setState({ gameStarted: true, gameStatus: '' })
    } else {
      clearInterval(timer)
      clearTimeout(timeout)
      this.setState({
        gameStatus: 'restart',
        timeLeft: null,
      })
      setTimeout(() => {
        this.startGame()
      }, 100)
    }
  }

  setTimeLeft = (number, difficulty) => {
    let timeLeft
    switch (difficulty) {
      case 1:
        timeLeft = number * 4
        break
      case 2:
        timeLeft = number * 3
        break
      case 3:
        timeLeft = Math.round(number * 2.5)
        break
      default:
        break
    }

    this.setState({ timeLeft })
    this.startTimer()
    timeout = setTimeout(() => {
      this.setState({ gameStatus: 'lose' })
    }, timeLeft * 1000)
  }

  startTimer = () => {
    timer = setInterval(() => {
      this.setState((prevState) => {
        return { timeLeft: prevState.timeLeft - 1 }
      })
    }, 1000)
  }

  winGame = () => {
    this.setState({ gameStatus: 'win' })
    clearTimeout(timeout)
  }

  componentWillUnmount() {
    clearInterval(timer)
    clearTimeout(timeout)
  }

  componentDidUpdate() {
    if (
      (this.state.timeLeft !== null && this.state.timeLeft <= 0) ||
      this.state.gameStatus === 'win'
    ) {
      clearInterval(timer)
    }
  }

  renderMain = () => <Main startGame={this.startGame} />

  renderGame = () => {
    if (this.state.gameStatus === 'win') {
      return <h1>Поздравляем, Вы победили!</h1>
    } else if (this.state.gameStatus === 'lose') {
      return <h1>К сожалению Вы не успели за отведенное время...</h1>
    } else
      return (
        <Game
          setTimeLeft={this.setTimeLeft}
          winGame={this.winGame}
          gameStatus={this.state.gameStatus}
        />
      )
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header
            startGame={this.startGame}
            isStarted={this.state.gameStarted}
            timeLeft={this.state.timeLeft}
          />
          <hr />
          <Switch>
            <Route path="/" exact render={this.renderMain} />
            <Route path="/game" render={this.renderGame} />
            <Route path="/rules" component={Rules} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
