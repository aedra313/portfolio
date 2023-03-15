import React from 'react';
import s from './tag.module.css';

const Tag = ({tags}) => {
  return (
    <div>
      <div className={s.tags}>
        {tags.map((tag, index) => (
          <div key={index} className={s.tagContainer}>
            <p className={s.tagDescription}>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
