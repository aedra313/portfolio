import React from 'react';
import s from './tag.module.css';

const Tag = ({tags, cn}) => {
  return (
    <div>
      <div className={s.tags}>
        {tags.map((tag, index) => (
          <div key={index} className={`${s.tagContainer} ${cn}`}>
            <p className={s.tagDescription}>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
