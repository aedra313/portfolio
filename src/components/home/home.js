import React from 'react';
import s from './home.module.css';
import Introduction from './introduction';
import Cases from '../cases/cases';
import OldCases from '../OldCases/oldCases';


const Home = ({path}) => {
  return (
    <div className={s.wrap}>
      <Introduction />
      <Cases path={path} />
      <OldCases />
    </div>
  );
};

export default Home;
