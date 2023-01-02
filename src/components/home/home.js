import React from 'react';
import s from './home.module.css';
import Introduction from './introduction';
import Cases from '../cases/cases';


const Home = () => {
  return (
    <div className={s.wrap}>
      <Introduction />
      <Cases />
    </div>
  );
};

export default Home;
