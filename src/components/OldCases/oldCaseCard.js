import React from 'react';
import s from './../cases/caseCard.module.css';
import {ReactComponent as Info} from './../../media/info.svg';


const CaseCard = ({title, img, link, views, hover, id}) => {
  return (
    <div className={s.wrap}>
      <a href={link}>
        <img src={img} alt={title} className={s.picture}/>
      </a>
      <a href={link}>
        <h2 className={s.title}>{title}</h2>
      </a>
      <div className={s.inline}>
        <p className={s.views}>{views} views</p>
        {hover && <Info title={hover}/>}</div>

    </div>
  );
};

export default CaseCard;
