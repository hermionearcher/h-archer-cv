import React, { useState } from 'react';
import Toggle from 'react-toggle';
import './ThemeSwitcher.css';

export default function () {
  let theme = true;

  const [visible, setVisible] = useState(false);
  const onClick = () => {
    theme = !theme;
    theme ? setVisible(true) : setVisible(false);

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

    console.log(visible);
  };
  return <></>;
}
