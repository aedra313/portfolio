import React from 'react';
import s from './contactButton.module.css';
import Button from './button';

const ContactButton = ({path}) => {
  const text = () => path === '/' || '' ? 'Drop a line' : 'Yes, send me an email';
  return (
    <a className={s.color} href='mailto:aedra313@gmail.com'>
      <Button size="large">
        <p>{text()}</p>
      </Button>
    </a>
  );
};

export default ContactButton;
