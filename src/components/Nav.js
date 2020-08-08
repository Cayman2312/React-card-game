import React from 'react';
import './styles/Nav.scss';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className="Nav">
      <NavLink to="/game" onClick={props.startGame}>
        {props.isStarted ? 'Начать новую игру' : 'Начать игру'}
      </NavLink>
      {props.isStarted ? null : <NavLink to="/rules">Правила</NavLink>}
      {props.isStarted ? null : <NavLink to="/about">Об игре</NavLink>}
    </div>
  )
}
