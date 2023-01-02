import React from 'react';
import {ReactComponent as MarqueeSvg} from '../../media/marquee_svg.svg';
import s from './marquee.module.css';


const Marquee = ({position}) => {
  const HEAD = 'AVAILABLE FOR FREELANCE WORK';
  const FOOT = ['LET’S TALK', 'GET IN TOUCH'];
  return (
    <div className={s.width}>
      <div className={position==='head' ? s.marqueeHead :s.marqueeFoot}>
        <div className={s.line}>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[0]}</p></div>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[1]}</p></div>
        </div>
        <div className={s.line}>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[0]}</p></div>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[1]}</p></div>
        </div>
        <div className={s.line}>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[0]}</p></div>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[1]}</p></div>
        </div>
        <div className={s.line}>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[0]}</p></div>
          <div className={s.marqueeContent}><MarqueeSvg /> <p className={s.marqueeText}>{position==='head' ? HEAD : FOOT[1]}</p></div>
        </div>


      </div>
    </div>

  );
};

export default Marquee;
