import data from './casesData';
import caseData from './casePage/casePageData';
import {Route} from 'react-router-dom';
import React from 'react';
import CasePage from './casePage/casePage';

const routes = data.map((item, index)=><Route key={`route${index}`} path={`/${item.path}`} element={<CasePage data={caseData[item.path] }/>} />);


export default routes;
