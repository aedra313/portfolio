import React from 'react';
import s from '../footer/footer.module.css';
import {ReactComponent as Link} from '../../media/linkIcon.svg';


const FollowMe = () => {
  return (
    <div className={s.contacts}>
      <p className={s.contactsItem}>Follow me</p>
      <a href="https://www.linkedin.com/" className={s.contactsLink}><Link /><span>LinkedIn</span> </a>
    </div>
  );
};

export default FollowMe;
