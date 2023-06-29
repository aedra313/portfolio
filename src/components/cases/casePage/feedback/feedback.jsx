import React from 'react';
import s from './feedback.module.css';

const Feedback = ({data}) => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Client’s feedback </h2>
      <div className={s.container}>
        <div className={s.quotes}></div>
        <div className={s.comment}>
          <p>{data.textLine1}</p>
          <p>{data.textLine2}</p>
        </div>
        <div className={s.copyrightContainer}>
          <img src={data.logo} alt="logo"/>
          <div>
            <p>{data.name}</p>
            <p className={s.position}>{data.position} <br /> {data.company}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
