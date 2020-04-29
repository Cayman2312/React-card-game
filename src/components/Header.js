import React from 'react';
import Nav from './Nav';
import './styles/Header.scss';

export default function Header(props) {
  return (
    <div className="Header">
      <h1>Поиск совпадений</h1>
      <Nav isStarted={props.started} />
    </div>
  );
}
