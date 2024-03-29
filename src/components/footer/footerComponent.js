import React from 'react';
import s from './footer.module.css';
/*
import Marquee from '../misc/marquee';
*/
import ContactButton from '../buttons/contactButton';
import CvButton from '../buttons/cvButton';
import FollowMe from '../misc/followMe';

const FooterComponent = ( ) => {
  return (
    <div>

      <div className={s.wrap}>
        <p className={s.callToAction}>Need help? Found a typo?
          Wanna hire me?</p>
        <div className={s.reachMe}>
          <div className={s.buttons}>
            <ContactButton className={s.contact} />
            <CvButton className={s.cv} />
          </div>
          <div className={s.contactsSection}>
            <FollowMe />
            <div className={s.contacts}>
              <p className={s.contactsItem}>Call me</p>
              <a href="tel:+17342456402" className={s.contactsLink}>+1 734-245-6402</a>
            </div>
          </div>
        </div>
        {/*
        <Marquee position={'foot'}/>
*/}
        <div className={s.credentials}>
          <span>Design: <span className={s.underlined}>Vlad Mazalov</span></span>
          <span>&#169; 2022</span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
