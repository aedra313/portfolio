import React, {useState} from 'react';
import Marquee from '../misc/marquee';
import s from './header.module.css';
import MenuButton from './menu/menuButton';
import Menu from './menu/menu';
import MenuItem from './menu/menuItem';
import {NavLink} from 'react-router-dom';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenProps = (menuOpen) => {
    setMenuOpen(menuOpen);
  };
  console.log(menuOpen);

  const menu = ['Home', 'Cases', 'About'];
  const menuItems = menu.map((val, index)=>{
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}>
        <NavLink

          to={val!=='Home'?val.toLowerCase():'/'}
          className={({isActive}) =>
              isActive ? s.active : undefined
          }>
          {val}
        </NavLink>
      </MenuItem>);
  });

  return (
    <div>
      <Marquee position={'head'} />
      <div className={s.wrap}>
        <div className={s.headerContent}>
          <h1 className={s.title} >Mariia Diachenko</h1>
          <p className={s.description}>tech copywriter</p>
        </div>

        <MenuButton menuOpenProps={menuOpenProps} menuOpen={menuOpen} />

      </div>
      <Menu open={menuOpen}>
        {menuItems}
      </Menu>
    </div>
  );
};

export default HeaderComponent;
