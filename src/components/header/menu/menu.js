import React from 'react';
import s from './menu.module.css';
import ContactButton from '../../buttons/contactButton';
import CvButton from '../../buttons/cvButton';

const Menu = ({open, children}) => {
  const styles={
    container: {
      height: open? '100vh': 0,
    },
  };

  return (
    <div className={s.container} style={styles.container}>
      {
          open?
              <div className={s.menuList}>
                {children}
                <div className={s.buttons}>
                  <ContactButton className={s.contact} />
                  <CvButton className={s.cv} />
                </div>
              </div>:null
      }
    </div>
  );
};
export default Menu;
