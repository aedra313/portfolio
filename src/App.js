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
import About from './components/about/about';
import routes from './components/cases/caseRoutes';


function App() {
  const [path, setPath] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenHandler = (menuOpen) => {
    setMenuOpen(menuOpen);
  };
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  });
  console.log(menuOpen);

  const styles={
    container: {
      overflowY: menuOpen && 'hidden',
      height: menuOpen && '100vh',
    },
  };
  console.log(routes);

  return (
    <div className={s.app} style={styles.container}>
      <HeaderComponent path={path} menuOpenHandler={menuOpenHandler} />
      <Routes>
        <Route index element={<Home path={path} />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/about" element={<About />} />
        {routes}

      </Routes>

      <FooterComponent path={path} />
    </div>

  );
}

export default App;
