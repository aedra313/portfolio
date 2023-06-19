import React from 'react';
import oldData from './oldCasesData';
import OldCaseCard from './oldCaseCard';
import s from './oldCases.module.css';


const OldCases = () => {
  const content = oldData.map((dataItem, index) => <OldCaseCard key={index} title={dataItem.title} id={dataItem.id} img={dataItem.img} views={dataItem.views} link={dataItem.link} hover={dataItem.hover} />);
  return (
    <div className={s.container}>
      <h2 className={s.title}>In a previous life</h2>
      <p className={s.description}>These days I mostly focus on working with clients on their websites and apps, and sometimes review other writers’ articles.</p>
      {content}
    </div>
  );
};

export default OldCases;
