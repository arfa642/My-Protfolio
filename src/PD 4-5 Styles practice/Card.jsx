import React from 'react';
import styles from './DSS.module.css';

const Card = ({
  myImg,
  sdbg,
  themeChanger,
  buttonTheme,
  themeName,
  iconSrc,
  cardStyle
}) => {
  return (
    <div className={styles[cardStyle]}>
      <img src={myImg} className={styles.imageStyle} alt="Me" />
      <div className={styles.contentStyle} style={{ backgroundColor: sdbg }}>
        <h2>Muhammad Arfa</h2>
        <h2>Frontend Developer</h2>
        <button onClick={themeChanger} className={styles[buttonTheme]}>
          <div>Change to {themeName}</div>
          <img className={styles.iconImg} src={iconSrc} />
        </button>
      </div>
    </div>
  );
};

export default Card;
