import React from 'react';
import s from './favoriteCard.module.css';
import LinkIcon from '../../media/linkIcon';


function FavoriteCard({title, img, link, long}) {
  const wrapClassName = `${s.wrap} ${long ? s.wide : ''}`;

  return (

    <div className={wrapClassName}>
      <div className={s.main}>
        <img src={img} alt={title} className={s.picture} />
        <h2 className={s.title}>{title}</h2>
      </div>
      {link && (
        <a href={link} className={s.link}>
          <LinkIcon cn={s.linkIcon} />
        </a>
      )}
    </div>
  );
}

export default FavoriteCard;
