import './App.css';
import s from './app.module.css';
import React from 'react';
import Home from './components/home';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';

function App() {
  return (
    <div className={s.app}>
      <HeaderComponent />


      <Home />

      <FooterComponent />
    </div>

  );
}

export default App;
