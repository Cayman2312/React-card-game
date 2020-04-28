import React from 'react';
import Nav from './Nav';
import './styles/Header.scss';

export default function Header() {
  return (
    <div className="Header">
      <h1>Поиск совпадений</h1>
      <Nav />
    </div>
  );
}
