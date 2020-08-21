import React from 'react'
import Nav from './Nav'
import './styles/Header.scss'
import { Redirect } from 'react-router-dom'

export default function Header({isStarted, timeLeft, startGame}) {
  return (
    <div className="Header">
      <h1>Поиск совпадений</h1>
      {isStarted ? <h2>Осталось времени: {timeLeft}</h2> :  <Redirect to="/" /> }
      <Nav startGame={startGame} isStarted={isStarted} />
    </div>
  )
}
