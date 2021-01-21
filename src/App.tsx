import React, { useState } from 'react';
import classNames from 'classnames';
import { Themes } from './constants';
import Home from './pages/Home/Home';
import './App.scss';
import Theming from './components/Theming/Theming';


function App() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [themeLoading, setThemeLoading] = useState(false);
  const [activeImage, setActiveImage] = useState(Themes[1].img_url);
  const [activeLabel, setActiveLabel] = useState(Themes[0].label);

  const changeTheme = (keyword: any, img_url: any, label: any) => {
    setShowDrawer(false);
    setThemeLoading(true);
    setActiveLabel(label);

    if (keyword === 'default') {
      setActiveImage('');
    } else {
      setActiveImage(img_url);
    }

    let rootEle = document.getElementById('root');
    if(rootEle){
      rootEle.removeAttribute(`class`);
      rootEle.classList.add(`theme-${keyword}`);
    }

    setTimeout(()=>{
      setThemeLoading(false);
    }, 3000)
  }

  const openDrawer = () => {
    setShowDrawer(true)
  }

  return (
    <>
      <Theming
        openDrawer={openDrawer}
        showDrawer={showDrawer}
        changeTheme={changeTheme} 
        activeImage={activeImage}
        activeLabel={activeLabel}
        themeLoading={themeLoading}
      />

      <div className={classNames({'hide': themeLoading})}>
        <Home />
      </div>
    </>
  );
}

export default App;
