import React from 'react';
import styles from './UsersList.module.css';
const UsersList = ({item}) => {
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={item.photo} alt={'pic'} />
      </div>
      <p className={styles.header}>{item.name}</p>
      <div className={styles.description}>
        <p>{item.position}</p>
        <p>{item.email}</p>
        <p>{item.phone}</p>
      </div>
    </li>
  );
};

export default UsersList;
