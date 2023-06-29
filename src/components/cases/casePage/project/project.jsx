import React from 'react';
import s from './project.module.css';

const Project = ({data}) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>The project</h2>
      <div className={s.description}>
        <p>{data.textLine1}</p>
        <p>{data.textLine2}</p>
      </div>
      <img className={`${s.img} ${s.img}`} src={data.img1} alt="project visual 1"/>
      <img className={`${s.img} ${s.img}`} src={data.img2} alt="project visual 2"/>
    </div>
  );
};

export default Project;
