import React from 'react';
import classNames from 'classnames';
import { Themes } from '../../constants';

type Props = {
  openDrawer: any; 
  showDrawer: any; 
  changeTheme: any; 
  themeLoading: any; 
  activeImage: any; 
  activeLabel: any; 
}

const Theming: React.FC<Props> = ({
  openDrawer,
  showDrawer,
  changeTheme,
  themeLoading,
  activeImage,
  activeLabel
}) => {
  return (
    <>
      <div className="theme-open pointer" onClick={openDrawer}>
          <span>T</span>
          <span>H</span>
          <span>E</span>
          <span>M</span>
          <span>E</span>
          <span>S</span>
      </div>

      <div className={classNames('color-selector', { 'open': showDrawer})}>
          <ul>
              {Themes.map(({
                keyword,
                label,
                img_url
              })=> <li key={keyword} className={keyword} onClick={() => changeTheme(keyword, img_url, label)}>{label}</li>)}
          </ul>
      </div>

      {themeLoading && (
        <div className="loader theme-loader">
          {activeImage && <img src={activeImage} alt={activeImage} />}
          <p>{activeLabel}</p>
        </div>
      )}
    </>
  )
}

export default Theming;
