import React from 'react';
import Marquee from './marquee';
import s from './header.module.css';
import {ReactComponent as Menu} from '../media/menu.svg';

const HeaderComponent = () => {
  return (
    <div>
      <Marquee position={'head'} />
      <div className={s.wrap}>
        <div className={s.headerContent}>
          <h1 className={s.title} >Mariia Diachenko</h1>
          <p className={s.description}>tech copywriter</p>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default HeaderComponent;
