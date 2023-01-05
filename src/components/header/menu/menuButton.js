import React from 'react';

const MenuButton = ({menuOpen, menuOpenProps}) => {
  const HandleClick = () => {
    menuOpenProps(!menuOpen);
  };
  console.log(menuOpen);
  const styles = {
    container: {
      cursor: 'pointer',
      zIndex: '5',
    },
    line: {
      height: '2px',
      width: '22px',
      background: '#F5F5F5',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    lineTop: {
      transform: menuOpen ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
      cursor: 'pointer',
    },
    lineMiddle: {
      width: '16px',
      marginLeft: '3px',
      opacity: menuOpen ? 0 : 1,
      transform: menuOpen ? 'translateX(-16px)' : 'none',
      cursor: 'pointer',
    },
    lineBottom: {
      transform: menuOpen ? 'translateX(-1px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container} onClick={HandleClick}>
      <div style={{...styles.line, ...styles.lineTop}}/>
      <div style={{...styles.line, ...styles.lineMiddle}}/>
      <div style={{...styles.line, ...styles.lineBottom}}/>
    </div>
  );
};

export default MenuButton;
