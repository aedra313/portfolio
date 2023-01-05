import React, {useState} from 'react';
import Marquee from '../misc/marquee';
import s from './header.module.css';
import MenuButton from './menuButton';
import Menu from './menu';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenProps = (menuOpen) => {
    setMenuOpen(menuOpen);
  };
  return (
    <div>
      <Marquee position={'head'} />
      <div className={s.wrap}>
        <div className={s.headerContent}>
          <h1 className={s.title} >Mariia Diachenko</h1>
          <p className={s.description}>tech copywriter</p>
        </div>
        <Menu />
        <MenuButton menuOpenProps={menuOpenProps} menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default HeaderComponent;
