import React, { useRef, useEffect } from 'react'
import './styles/Rules.scss'

export default function Rules() {
  const ref = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.add('appeared')
    }, 20)
  }, [])

  return (
    <div ref={ref} className="Rules">
      <h3>Правила игры</h3>
      <p>
        Приветствуем вас на странице с моей мини-игрой! <br /> <br />
        Для победы необходимо отыскать все пары одинаковых карточек за
        отведенное время. <br /> <br /> Время будет отображаться вверху экрана.
        Его количество будет зависеть от выбранного уровня сложности и
        количества карточек.
        <br /> <br />
        Для усложнения задачи вы также можете использовать не повторяющиеся
        карточки. <br /> <br />
        Для старта нажмите "Начать игру".
      </p>
    </div>
  )
}
