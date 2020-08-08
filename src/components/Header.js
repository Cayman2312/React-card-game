import React from 'react'
import Nav from './Nav'
import './styles/Header.scss'

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Поиск совпадений</h1>
      {props.isStarted ? <h2>Осталось времени: {props.timeLeft}</h2> : null}
      <Nav startGame={props.startGame} isStarted={props.isStarted} />
    </div>
  )
}
