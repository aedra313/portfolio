import React from 'react';
import s from './introduction.module.css';
import CvButton from '../buttons/cvButton';


const Introduction = () => {
  return (
    <>
      <p className={s.title}>A copywriter who knows what Flutter is</p>
      <div className={s.wrap}>
        <div className={s.bio}>
          <p>Hi! I’m Mariia. A copywriter / content writer who’s passionate about
                graphic & UI/UX design, software-making, and Boston Dynamics&apos; robot dogs.</p>
          <p>Currently freelancing, previously worked as a Creative
                Copywriter at Zgraya Digital and a Content Writer at Cleveroad.</p>
        </div>
        <CvButton className={s.button} img={false} />
      </div>
    </>
  );
};

export default Introduction;
