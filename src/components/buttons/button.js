import React from 'react';
import s from './button.module.css';

const Button = (props) => {
  const size = props.size;
  return (
    <div className={`${s[size]} +' '+ ${s.block}`}>
      {props.children}
    </div>
  );
};

export default Button;
