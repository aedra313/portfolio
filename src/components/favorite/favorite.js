import React from 'react';
import favoriteData from './favoriteData';
import s from './../cases/cases.module.css';
import FavoriteCard from './favoriteCard';


const Favorite = () => {
  const content = favoriteData.map((dataItem, index) => <FavoriteCard key={index} title={dataItem.title} long={dataItem.long} img={dataItem.img} link={dataItem.link} />);
  return (
    <div>
      <h2 className={s.title}>Stuff I love</h2>
      <p className={s.description}>If you&#39;re considering me for an office position let’s see if I’m a good fit.</p>
      <div className={s.contentWrap}>
        {content}
      </div>
    </div>
  );
};

export default Favorite;
