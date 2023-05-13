import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, text, className, type }) => {
  return (
    <button className={`${styles[className]}`} onClick={onClick} type={type}>
      <p className={styles.btnText}>{text}</p>
    </button>
  );
};

export default Button;
