import React from 'react';
import {ReactComponent as Link} from './../../../../media/linkIcon.svg';
import Tag from '../../../misc/tag';
// import gs from './../casePage.module.css';
import s from './intro.module.css';

const Intro = ({data}) => {
  console.log(data.name);
  return (
    <>
      <div className={s.container}>
        <div>
          <h1 className={s.name}>{data.name}</h1>
          <a href={data.link}>
            <div className={s.linkElement}>
              <Link />
              <p className={s.link}>Visit website</p>
            </div>
          </a>
        </div>
        <div className={s.descriptionSection}>
          <p className={s.description}>{data.description}</p>
          <Tag tags={data.tags} cn={s.tag} />
        </div>
      </div>
      <img className={s.img} src={data.img} alt="Ralabs cover"/>
    </>
  );
};

export default Intro;
