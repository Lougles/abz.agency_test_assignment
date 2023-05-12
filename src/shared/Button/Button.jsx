import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, text, className }) => {
  return (
    <button className={`${styles[className]}`} onClick={onClick}>
      <p className={styles.btnText}>{text}</p>
    </button>
  );
};

export default Button;
