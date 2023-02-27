import React from 'react';
import s from './about.module.css';
import FollowMe from '../misc/followMe';
import DATA from './careerData';

const About = () => {
  const contentNoSpacing = DATA.map((dataItem, index)=> <div className={s.job} key={index}>
    <div >
      <p className={s.position}>
        {dataItem.position}
      </p>
      <p className={s.company}>
        {dataItem.company}
      </p>
      <p className={s.length}>
        {dataItem.length}
      </p>
    </div>
    <div>
      <ul className={s.taskList}>
        {dataItem.tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </div>
  </div>);

  const contentWithSeparators = contentNoSpacing.flatMap((item, index, arr) => {
    if (index === arr.length - 1) {
      return [item];
    }
    return [item, <div key={`separator-${index}`} className={s.separator} />];
  });

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Mariia Diachenko</h1>
        <FollowMe />
      </div>
      <h2 className={s.title}>Career pathway</h2>
      {contentWithSeparators}
    </div>
  );
};

export default About;
