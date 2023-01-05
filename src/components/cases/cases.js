import React from 'react';
import CaseCard from './caseCard';
import data from './casesData';
import s from './cases.module.css';


const Cases = () => {
  const toggle = window.location.pathname.includes('cases');
  let array = [];
  toggle ? array = data : array = data.slice(0, 4);
  const content = array.map((dataItem, index) => <CaseCard key={index} title={dataItem.title} description={dataItem.description} img={dataItem.img} tags={dataItem.tags} link={dataItem.link} />);
  return (
    <div className={s.container}>
      <h2 className={s.title}>My recent works</h2>
      {!toggle && <p className={s.description}><span className={s.yellow}>5+ years of experience</span> turned into this...</p>}
      {content}
    </div>
  );
};

export default Cases;
