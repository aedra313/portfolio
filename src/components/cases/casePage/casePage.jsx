import React from 'react';
// eslint-disable-next-line no-unused-vars
import gs from './casePage.module.css';
import Intro from './intro/intro';
import Feedback from './feedback/feedback';
import Project from './project/project';
import Process from './process/process';
import Nav from './nav/nav';

const CasePage = ({data}) => {
  console.log(data);
  return (
    <>
      <Nav data={data.intro}/>
      <Intro data={data.intro}/>
      <div className={gs.container}>
        <div className={gs.divider} />
        <Feedback data={data.feedback}/>
        <div className={gs.divider} />
        <Project data={data.aboutProject}/>
        <div className={gs.divider} />
        <Process data={data.aboutProcess}/>
      </div>
    </>
  );
};

export default CasePage;
