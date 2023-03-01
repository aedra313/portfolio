import React from 'react';
// eslint-disable-next-line no-unused-vars
import gs from './casePage.module.css';
import Intro from './intro/intro';
import Feedback from './feedback/feedback';
import Project from './project/project';
import Process from './process/process';

const CasePage = () => {
  return (
    <div>
      <Intro />
      <Feedback />
      <Project />
      <Process />
    </div>
  );
};

export default CasePage;
