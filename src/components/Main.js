import React from 'react'
import './styles/Main.scss'
import { Link } from 'react-router-dom'

export default function Main(props) {
  return (
    <div className="Main">
      <h1>Добро пожаловать на главную страницу нашей игры!</h1>
      <p>
        Перед началом игры вы можете{' '}
        <Link to="/rules">
          <b>ознакомиться с правилами</b>
        </Link>{' '}
        или же сразу{' '}
        <Link id="newGame" to="/game" onClick={props.startGame}>
          <b>начать новую игру.</b>
        </Link>
      </p>
    </div>
  )
}
