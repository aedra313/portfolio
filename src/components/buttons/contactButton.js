import React from 'react';
import s from './contactButton.module.css';
import Button from './button';

const ContactButton = (props) => {
  return (
    <a className={s.color} href='mailto:aedra313@gmail.com'>
      <Button size="large">
        <p>Drop a line</p>
      </Button>
    </a>
  );
};

export default ContactButton;
