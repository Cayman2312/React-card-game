import React from 'react';
import './Cards.scss';
import Card from './Card/Card';

export default function Cards({ cards, onClick }) {
  return (
    <div>
      {cards.length === 0
        ? null
        : cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              status={card.status}
              src={card.img}
              show={card.show}
              onClick={(card) => onClick(card)}
            />
          ))}
    </div>
  );
}
