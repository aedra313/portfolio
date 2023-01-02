import './App.css';
import s from './app.module.css';
import React, {useState, useEffect} from 'react';
import Home from './components/home/home';
import HeaderComponent from './components/header/headerComponent';
import FooterComponent from './components/footer/footerComponent';
import {
  Route,
  Routes, useLocation,
} from 'react-router-dom';
import Cases from './components/cases/cases';

function App() {
  const [path, setPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  });


  console.log(path);
  return (
    <div className={s.app}>
      <HeaderComponent path={path} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cases" element={<Cases />} />

      </Routes>

      <FooterComponent path={path} />
    </div>

  );
}

export default App;
