import React from 'react';
import s from './contactButton.module.css';
import Button from './button';
import usePath from '../../hooks/usePath';

const ContactButton = ({className}) => {
  const text = () => usePath('/'||''||'/portfolio' ) ? 'Drop a line' : 'Drop a line';
  return (

    <a className={`${s.color} ${className}`} href='mailto:maria.diachenko.98@gmail.com'>
      <Button size="large">
        <p>{text()}</p>
      </Button>
    </a>

  );
};

export default ContactButton;
