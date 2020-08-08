import React, { useRef, useEffect } from 'react'
import './styles/About.scss'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.add('appeared')
    }, 20)
  }, [])

  return (
    <div ref={ref} className="About">
      <h3>Коротко о создании игры</h3>
      <p>
        Игра была создана в рамках обучения по нативному JS, впоследствие
        перенесена на React JS.
        <br />
        <br />
        По своей сути является моим первым React-приложением.
      </p>
    </div>
  )
}
