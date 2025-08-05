import React, { useState } from 'react';
import Me from './Me.jpg';
import MeDark from './MeDark.png';
import moon from '../../images/moon.png';
import sun from '../../images/sun.png';
import Card from './Card';
import styles from './DSS.module.css';

const DynamicStyle = () => {
  const [cardStyle, setCardStyle] = useState('lightCardStyle');
  const [themeName, setThemeName] = useState('Dark');
  const [buttonTheme, setButtonTheme] = useState('buttonStyle');
  const [iconSrc, setIconSrc] = useState(moon);
  const [myImg, setMyImg] = useState(Me);
  const [dbg, setDbg] = useState('black');
  const [sdbg, setSdbg] = useState('white');

  function themeChanger() {
    if (themeName === 'Dark') {
      setThemeName('Light');
      setCardStyle('darkCardStyle');
      setButtonTheme('darkButtonStyle');
      setIconSrc(sun);
      setMyImg(MeDark);
      setDbg('white');
      setSdbg('black');
    } else {
      setThemeName('Dark');
      setCardStyle('lightCardStyle');
      setButtonTheme('buttonStyle');
      setIconSrc(moon);
      setMyImg(Me);
      setDbg('black');
      setSdbg('white');
    }
  }

  return (
    <div style={{ backgroundColor: dbg }} className={styles.mainDiv}>
      <Card
        cardStyle={cardStyle}
        myImg={myImg}
        sdbg={sdbg}
        themeChanger={themeChanger}
        buttonTheme={buttonTheme}
        themeName={themeName}
        iconSrc={iconSrc}
      />
      <Card
        cardStyle={cardStyle}
        myImg={myImg}
        sdbg={sdbg}
        themeChanger={themeChanger}
        buttonTheme={buttonTheme}
        themeName={themeName}
        iconSrc={iconSrc}
      />
      <Card
        cardStyle={cardStyle}
        myImg={myImg}
        sdbg={sdbg}
        themeChanger={themeChanger}
        buttonTheme={buttonTheme}
        themeName={themeName}
        iconSrc={iconSrc}
      />
      <Card
        cardStyle={cardStyle}
        myImg={myImg}
        sdbg={sdbg}
        themeChanger={themeChanger}
        buttonTheme={buttonTheme}
        themeName={themeName}
        iconSrc={iconSrc}
      />
      <Card
        cardStyle={cardStyle}
        myImg={myImg}
        sdbg={sdbg}
        themeChanger={themeChanger}
        buttonTheme={buttonTheme}
        themeName={themeName}
        iconSrc={iconSrc}
      />
    </div>
  );
};

export default DynamicStyle;
