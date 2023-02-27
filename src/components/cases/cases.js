import React from 'react';
import CaseCard from './caseCard';
import data from './casesData';
import s from './cases.module.css';
import usePath from '../../hooks/usePath';
import useMobile from '../../hooks/useMobile';


const Cases = () => {
  //  const toggle = window.location.hash.includes('/cases');
  const toggle = usePath('/cases');
  const isMobile = useMobile();
  const array = toggle ? data : data.slice(0, 4);
  const content = array.map((dataItem, index) => (
    <CaseCard key={index} {...dataItem} />
  ));
  const rows = Math.ceil(content.length / 2);

  const style = {
    wrap: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 660px)',
      gridTemplateRows: 'repeat(' + rows + ', 528px)',
      columnGap: '24px',
      rowGap: '80px',
      alignItems: 'end',
      width: '1344px',
    },
  };

  const container = toggle ? s.container : null;
  const grid = !isMobile ? style.wrap : null;

  return (
    <div className={container} style={grid}>
      <h2 className={s.title}>My recent works</h2>
      <div className={s.description}>{!toggle && <p><span className={s.yellow}>5+ years of experience</span> turned into this...</p>}</div>
      {content}
    </div>
  );
};

export default Cases;
