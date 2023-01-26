import React from 'react';
import oldData from './oldCasesData';
import s from './../cases/cases.module.css';
import OldCaseCard from './oldCaseCard';


const OldCases = () => {
  const content = oldData.map((dataItem, index) => <OldCaseCard key={index} title={dataItem.title} id={dataItem.id} img={dataItem.img} views={dataItem.views} link={dataItem.link} hover={dataItem.hover} />);
  return (
    <div>
      <h2 className={s.title}>In a previous life</h2>
      <p className={s.description}>These days I mostly focus on working with clients on their websites and apps, and sometimes review other writers’ articles.</p>

      <div className={s.wrap}>{content}</div>
    </div>
  );
};

export default OldCases;
