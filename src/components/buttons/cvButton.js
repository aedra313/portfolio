import React from 'react';
import s from './cvButton.module.css';
import Button from './button';
import {ReactComponent as Download} from './../../media/download.svg';

const CvButton = ({img, className}) => {
  return (
    <a className={`${s.color} ${className}`} href='./../../media/cv/CV.pdf' download>
      <Button size="large">
        <p>Download CV</p>
        {img && <Download />}
      </Button>
    </a>
  );
};

export default CvButton;
