import React from 'react';

const Menu = ({open, children}) => {
  const styles={
    container: {
      position: 'relative',
      top: '-16px',
      left: '0',
      height: open? '300px': 0,
      width: '343px',
      display: 'flex',
      flexDirection: 'column',
      background: '#292929',
      borderRadius: '16px',
      opacity: 0.95,
      color: '#fafafa',
      transition: 'height 0.3s ease',
      zIndex: 0,
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
