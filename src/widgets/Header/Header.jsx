import React from 'react';
import Button from "../../shared/Button/Button";
import styles from './Header.module.css'
import logo from '../../shared/pictures/Group.png'
import text from '../../shared/pictures/Text.png'
const Header = () => {
  return (
    <div className={`${styles.HeaderWrapper}`}>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt={'logo'}/>
        <img className={styles.text} src={text} alt={'text'}/>
      </div>
      <div className={styles.btnWrapper}>
        <Button text={'Users'} className={'primary'} />
        <Button text={'Sign up'} className={'primary'} />
      </div>
    </div>
  );
};

export default Header;
