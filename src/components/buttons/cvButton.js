import React from 'react';
import s from './cvButton.module.css';
import Button from './button';
import {ReactComponent as Download} from './../../media/download.svg';

const CvButton = (props) => {
  return (
    <a className={s.color} href='https://drive.google.com/file/d/1lDVqAG5etp8tL7S7J5fYeJDhzGEnNtEM/view' download>
      <Button size="large">
        <p>Download CV</p>
        <Download />
      </Button>
    </a>
  );
};

export default CvButton;
