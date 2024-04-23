import React, { useContext, useEffect } from 'react';
import './ThemeSwitcher.css';
import { IoIosPartlySunny } from "react-icons/io";


export default function ThemeSwitcher() {
  let theme = true;

  const onClick = () => {
    theme = !theme;

    if (theme) {
      document.documentElement.style.setProperty(
        '--mainTextColor',
        'var(--mainTextColor-light)'
      );
      document.documentElement.style.setProperty(
        '--secondaryTextColor',
        'var(--secondaryTextColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainLinkColor',
        'var(--mainLinkColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainBorderColor',
        'var(--mainBorderColor-light)'
      );
      document.documentElement.style.setProperty(
        '--mainBgColor',
        'var(--mainBgColor-light)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--mainTextColor',
        'var(--mainTextColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--secondaryTextColor',
        'var(--secondaryTextColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainLinkColor',
        'var(--mainLinkColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainBorderColor',
        'var(--mainBorderColor-dark)'
      );
      document.documentElement.style.setProperty(
        '--mainBgColor',
        'var(--mainBgColor-dark)'
      );
    }
  };

  return (
    <>
      <div id="wrapper--techstack__items">
        <div className="card--techstack" id="themeSwitcherBtn" onClick={onClick}>
          <IoIosPartlySunny size={25}/>
        </div>
      </div>
    </>
  );
}
