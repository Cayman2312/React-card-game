import React, { useRef, useEffect } from 'react';
import './styles/Rules.scss';

export default function Rules() {
  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.add('appeared');
    }, 20);
  }, []);

  return (
    <div ref={ref} className="Rules">
      <h3>Правила игры</h3>
      <p>
        Приветствуем вас на странице с нашей игрой. Для победы необходимо
        отыскать все пары одинаковых карточек за отведенное время. Время будет
        отображаться в правом верхнем углу экрана. Количество отведенного
        времени будет зависеть от заданного количества карточек. Для старта
        нажмите "Начать игру"
      </p>
    </div>
  );
}
