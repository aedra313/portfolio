import React from 'react';
import s from './contactButton.module.css';
import Button from './button';
import usePath from '../../hooks/usePath';

const ContactButton = ({className}) => {
  const text = () => usePath('/'||''||'/portfolio' ) ? 'Drop a line' : 'Yes, send me an email';
  console.log(usePath('/'||''||'/portfolio'));
  return (

    <a className={`${s.color} ${className}`} href='mailto:aedra313@gmail.com'>
      <Button size="large">
        <p>{text()}</p>
      </Button>
    </a>

  );
};

export default ContactButton;
