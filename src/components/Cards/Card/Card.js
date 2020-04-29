import React from 'react';
import './Card.scss';

export default function Card(props) {
  const cls = ['Card'];
  if (props.show) {
    cls.push('show');
  }
  if (props.status) {
    cls.push('success');
  }

  return (
    <div
      className={cls.join(' ')}
      data-id={props.id}
      onClick={(e) => {
        props.onClick(e.target.dataset.id);
      }}
    >
      <img
        className="front"
        data-id={props.id}
        src="/images/cover.jpg"
        alt="front"
      />
      <img className="back" data-id={props.id} src={props.src} alt="back" />
    </div>
  );
}
