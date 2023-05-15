import React, {useEffect, useState} from 'react';
import styles from './UsersList.module.css';
const UsersList = ({item, index, data}) => {
  const [tablet, setTablet] = useState('');
  const [laptop, setLaptop] = useState('');
  const [lastMobileItem, setLastMobileItem] = useState('');
  const [lastTabletItems, setLastTabletItem] = useState('');
  const [lastLaptopItems, setLastLaptopItems] = useState('');
  useEffect(() => {
    if ((index + 1) % 2 !== 0) {
      setTablet('tabletMargin');
    }
    if((index + 1) % 3 !== 0) {
      setLaptop('laptopMargin')
    }
  }, [index])
  
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index === data.length - 1) {
      setLastMobileItem('lastMobileItem')
    }
    if (index >= lastIndex - 1) {
      setLastTabletItem('lastTabletItem')
    }
    if (index >= lastIndex - 2) {
      setLastLaptopItems('lastLaptopItem')
    }
  }, [data.length, index])
  
  return (
    <li className={`${styles.item} ${styles[tablet]} ${styles[laptop]} ${styles[lastMobileItem]} ${styles[lastTabletItems]} ${styles[lastLaptopItems]}`}>
      <div className={styles.imgWrapper}>
        <img src={`${item.photo}`} alt={'user img'} />
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
