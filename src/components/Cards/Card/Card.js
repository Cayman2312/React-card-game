import React, { useRef, useEffect, useState } from 'react';
import './Card.scss';

export default function Card(props) {
  const [state, setState] = useState(true);
  const ref = useRef(null);

  const cls = ['Card'];
  if (props.show) {
    cls.push('show');
  }
  if (props.status) {
    cls.push('success');
  }
  if (state) {
    cls.push('start');
  }

  useEffect(() => {
    setState(false);
    setTimeout(() => {
      ref.current.style = '';
    }, ref.current.id * 50);
  }, []);

  return (
    <div
      style={{ transitionDelay: `${props.delay * 50}ms` }}
      className={cls.join(' ')}
      ref={ref}
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
  );
}
