import React from 'react';
import s from './home.module.css';
import Introduction from './introduction';
import Cases from '../cases/cases';


const Home = ({path}) => {
  return (
    <div className={s.wrap}>
      <Introduction />
      <Cases path={path} />
    </div>
  );
};

export default Home;
