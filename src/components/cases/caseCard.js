import React from 'react';
import s from './caseCard.module.css';
import Tag from '../misc/tag';


const CaseCard = ({title, description, img, tags, link}) => {
  return (
    <div className={s.wrap}>
      <a href={link} rel="noopener noreferrer">
        <img src={img} alt={title} className={s.picture} loading="lazy" />
      </a>

      <a href={link} rel="noopener noreferrer">
        <h2 className={s.title}>{title}</h2>
      </a>

      <p className={s.description}>{description}</p>
      <Tag tags={tags} />
    </div>
  );
};

export default CaseCard;
