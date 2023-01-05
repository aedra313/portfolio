import React, {useState} from 'react';

const MenuItem = ({delay, key, children}) => {
  const [hovered, setHovered] = useState(false);

  const HandleHover = () => setHovered(!hovered);

  const styles={
    container: {
      opacity: 0,
      animation: '1s appear forwards',
      animationDelay: delay,
    },
    menuItem: {
      fontFamily: `'Space Grotesk', sans-serif`,
      fontSize: '1.2rem',
      padding: '1rem 0',
      margin: '0 5%',
      cursor: 'pointer',
      color: hovered? 'gray':'#F5F5F5',
      transition: 'color 0.2s ease-in-out',
      animation: '0.5s slideIn forwards',
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
        onMouseEnter={HandleHover}
        onMouseLeave={HandleHover}
        /* onClick={this.props.onClick}*/
      >

        {children}
      </div>
      <div style={styles.line}/>
    </div>
  );
};
export default MenuItem;
