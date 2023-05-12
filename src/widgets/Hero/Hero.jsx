import React from 'react';
import styles from './Hero.module.css';
import Button from "../../shared/Button/Button";
const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      {/*<div className={styles.HeroWrapper}>*/}
        <h1 className={styles.header}>Test assignment for front-end developer</h1>
        <p className={styles.description}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
        <div className={styles.btn}>
          <Button text={'Sign up'} className={'primary'} />
        </div>
      {/*</div>*/}
    </div>
  );
};

export default Hero;
