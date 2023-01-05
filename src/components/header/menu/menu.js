import React from 'react';

const Menu = ({open, children}) => {
  const styles={
    container: {
      position: 'relative',
      top: '0px',
      left: 0,
      height: open? '100%': 0,
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: 'black',
      opacity: 0.95,
      color: '#fafafa',
      transition: 'height 0.3s ease',
      zIndex: 2,
    },
    menuList: {
      paddingTop: '3rem',
    },
  };

  return (
    <div style={styles.container}>
      {
          open?
              <div style={styles.menuList}>
                {children}
              </div>:null
      }
    </div>
  );
};
export default Menu;
