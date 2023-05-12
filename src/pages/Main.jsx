import React from 'react';
import Header from "../widgets/Header/Header";
import Hero from "../widgets/Hero/Hero";
import styles from './Main.module.css';
import Users from "../widgets/Users/Users";
const Main = () => {
  return (
    <div className={styles.MainWrapper}>
      <Header />
      <Hero />
      <Users />
    </div>
  );
};

export default Main;
