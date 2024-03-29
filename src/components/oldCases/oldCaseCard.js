import React from 'react';
import w from './oldCaseCard.module.css';
import {ReactComponent as Info} from './../../media/info.svg';
import LinkIcon from '../../media/linkIcon';


const CaseCard = ({title, img, link, views, hover, id}) => {
  return (
    <div className={w.wrap}>
      <a href={link}>
        <div className={`${w.imgBlock} ${w[id]} `}>
          <img src={img} alt={title} className={w.img} />
          <a href={link} className={w.link}><LinkIcon cn={w.linkIcon} /></a>
        </div>
      </a>
      <a href={link}>
        <h2 className={w.title}>{title}</h2>
      </a>
      <div className={w.inline}>
        <p className={w.views}>{views} views</p>
        {hover && <Info title={hover}/>}</div>

    </div>
  );
};

export default CaseCard;
