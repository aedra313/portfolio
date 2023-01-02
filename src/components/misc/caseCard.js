import React from 'react';
import s from './caseCard.module.css';


const CaseCard = ({title, description, img, tags, link}) => {
  const tagBlock = tags.map( (tag, index) => <div key={index} className={s.tagbox}><p className={s.tagDescription}>{tag}</p></div>);
  return (
    <div className={s.wrap}>
      <a href={link}>
        <img src={img} alt={title} className={s.picture}/>
      </a>
      <a href={link}>
        <h2 className={s.title}>{title}</h2>
      </a>
      <p className={s.description}>{description}</p>
      <div className={s.tags}>
        {tagBlock}
      </div>
    </div>
  );
};

export default CaseCard;
