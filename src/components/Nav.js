import React from 'react';
import './styles/Nav.scss';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/">Начать игру</NavLink>
      <NavLink to="/rules">Правила</NavLink>
      <NavLink to="/about">О нас</NavLink>
    </div>
  );
}
