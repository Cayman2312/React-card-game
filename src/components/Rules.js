import React, { useEffect, useState } from 'react';
import './styles/Rules.scss';

export default function Rules() {
  const [cls, setCls] = useState('Rules start');

  useEffect(() => {
    setCls('Rules');
    return () => {
      setCls('Rules start');
    };
  }, [cls]);

  return (
    <div className={cls}>
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
