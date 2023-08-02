import React from 'react';
import s from '../footer/footer.module.css';
import LinkIcon from '../../media/linkIcon';


const FollowMe = () => {
  return (
    <div className={s.contacts}>
      <p className={s.contactsItem}>Follow me</p>
      <a href="https://www.linkedin.com/in/mariia-diachenko-337423193" className={s.contactsLink}><LinkIcon cn={s.linkIcon} /><span>LinkedIn</span> </a>
    </div>
  );
};

export default FollowMe;
