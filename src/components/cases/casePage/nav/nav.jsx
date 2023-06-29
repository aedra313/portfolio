import React from 'react';
// import useMobile from '../../../../hooks/useMobile';
import {ReactComponent as Arrow} from './../../../../media/cases/arrow-left.svg';

import s from './nav.module.css';

const Nav = ({data}) => {
  // const isMobile = useMobile();
  return (
    <div>

      <div className={s.mobileContainer}>
        <a className={s.mobileContainer} href="/#/cases/">
          <Arrow />
          <p className={s.mobileText}>Back to Cases</p>
        </a>
      </div>

      <div className={s.desktopContainer}>
        <a href="/#/"> <p>Home</p></a>
        <p className={`${s.inactive} ${s.divider}`}>|</p>
        <a href="/#/cases"> <p>Cases</p></a>
        <p className={`${s.inactive} ${s.divider}`}>|</p>
        <a href="#"> <p className={s.inactive}>{data.name}</p></a>
      </div>

    </div>
  );
};

export default Nav;
