import React from 'react';
import styles from './HeadLine.module.css'
const HeadLine = ({ text, className }) => {
  return (
    <h1 className={styles[className]}>{text}</h1>
  );
};

export default HeadLine;
