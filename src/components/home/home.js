import React from 'react';
import s from './home.module.css';
import Introduction from './introduction';
import Cases from '../cases/cases';
import OldCases from '../oldCases/oldCases';
import Favorite from '../favorite/favorite';


const Home = () => {
  return (
    <div className={s.wrap}>
      <Introduction />
      <Cases isHome={true} />
      <OldCases />
      <Favorite />
    </div>
  );
};

export default Home;
