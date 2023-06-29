import React from 'react';
import CaseCard from './caseCard';
import data from './casesData';
import s from './cases.module.css';


const Cases = ({isHome}) => {
  const array = !isHome ? data : data.slice(0, 4);
  const content = array.map((dataItem, index) => (
    <CaseCard key={index} {...dataItem} />
  ));


  const container = isHome ? s.containerHome: s.containerCases;
  console.log(isHome);
  return (
    <div className={container} >
      <div className={s.descriptionBlock}>
        <h2 className={s.title}>My recent works</h2>
        <div className={s.description}>
          {
            isHome &&
                <p>
                  <span className={s.yellow}>5+ years of experience</span>
                    turned into this...
                </p>
          }
        </div>

      </div>           <div className={s.casesWrap}>{content}</div>
    </div>
  );
};

export default Cases;
