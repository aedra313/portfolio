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
  const content = [];
  // eslint-disable-next-line guard-for-in
  for (const i in contentNoSpacing) {
    content.push(contentNoSpacing[i]);
    content.push(<div className={s.separator}></div>);
  }
  content.pop();
  return (
    <div className={s.container}>
      <div className={s.header}>
        <h1>Mariia Diachenko</h1>
        <FollowMe />
      </div>
      <h2 className={s.title}>Career pathway</h2>
      {content}
    </div>
  );
};

export default About;
