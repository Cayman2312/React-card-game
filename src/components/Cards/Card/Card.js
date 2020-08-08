import React, { useRef, useEffect, useState } from 'react'
import './Card.scss'

export default function Card(props) {
  const [state, setState] = useState(true)
  const ref = useRef(null)

  const cls = ['Card']
  if (props.show) {
    cls.push('show')
  }
  if (props.status) {
    cls.push('success')
  }
  if (state) {
    cls.push('start')
  }

  useEffect(() => {
    setTimeout(() => {
      setState(false)
    }, 100)
  }, [])

  const srcCover = '/images/cover.jpg'

  return (
    <div
      className={cls.join(' ')}
      ref={ref}
      data-id={props.id}
      onClick={(e) => {
        props.onClick(e.target.dataset.id)
      }}
    >
      <img
        className="front"
        data-id={props.id}
        src={srcCover}
        alt="front"
        draggable="false"
      />
      <img
        className="back"
        data-id={props.id}
        src={props.src}
        alt="back"
        draggable="false"
      />
    </div>
  )
}
