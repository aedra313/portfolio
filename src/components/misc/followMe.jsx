import React from 'react';
import s from '../footer/footer.module.css';
import {ReactComponent as Link} from '../../media/linkIcon.svg';


const FollowMe = () => {
  return (
    <div>
      <p className={s.contactsItem}>Follow me</p>
      <a href="https://www.linkedin.com/" className={s.contactsLink}><span>LinkedIn</span> <Link /></a>
    </div>
  );
};

export default FollowMe;
