import React from 'react'
import './Cards.scss'
import Card from './Card/Card'

export default function Cards({ cards, onClick }) {
  if (!cards.length) return null

  return cards.map((card) => (
    <Card key={card.id} card={card} onClick={onClick} />
  ))
}
