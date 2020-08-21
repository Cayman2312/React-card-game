import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import './Card.scss'

export default function Card({ onClick, card: { id, show, status, img } }) {
  const [start, setStart] = useState(true)

  const cxCard = cx({
    'Card': true,
    'show': !!show,
    'success': !!status,
    'start': !!start,
  })

  useEffect(() => {
    setTimeout(() => {
      setStart(false)
    }, 100)
  }, [])

  const srcCover = '/images/cover.jpg'

  return (
    <div className={cxCard} onClick={() => onClick(id)}>
      <img className="front" src={srcCover} alt="front" draggable="false" />
      <img className="back" src={img} alt="back" draggable="false" />
    </div>
  )
}
