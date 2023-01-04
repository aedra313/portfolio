import React from 'react';
import s from './favoriteCard.module.css';
import {ReactComponent as LinkIcon} from './../../media/linkIcon.svg';


const FavoriteCard = ({title, img, link, long}) => {
  let wrapClassName;
    long ? wrapClassName =`${s.wrap} + ${s.wide}` : wrapClassName=s.wrap;
    return (
      <div className={wrapClassName}>
        <div className={s.main}><img src={img} alt={title} className={s.picture}/>
          <h2 className={s.title}>{title}</h2>
        </div>
        {link && <a href={link} className={s.link}><LinkIcon className={s.linkIcon} /></a>}
      </div>
    );
};

export default FavoriteCard;
