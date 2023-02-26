import React, {useState} from 'react';
import s from './menuItem.module.css';

const MenuItem = ({delay, children}) => {
  const [hovered, setHovered] = useState(false);

  const HandleHover = () => setHovered(!hovered);

  const styles={
    container: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: delay,
    },
    menuItem: {
      color: hovered? 'gray':'#F5F5F5',
      animationDelay: delay,

    },
    line: {
      width: '90%',
      height: '1px',
      background: 'gray',
      margin: '0 auto',
      animation: '0.5s shrink forwards',
      animationDelay: delay,

    }};

  return (
    <div style={styles.container}>
      <div
        style={styles.menuItem}
        className={s.menuItem}
        onMouseEnter={HandleHover}
        onMouseLeave={HandleHover}
        /* onClick={this.props.onClick}*/
      >

        {children}
      </div>

    </div>
  );
};
export default MenuItem;
