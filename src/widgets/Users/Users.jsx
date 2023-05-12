import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import UsersList from "../../shared/UsersList/UsersList";
import axios from "axios";
import Button from "../../shared/Button/Button";
const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users')
    .then(({data}) => {
      setData(data.users);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  console.log(data);
  return (
    <div className={`${styles.UsersWrapper}`}>
      <h1 className={styles.header}>Working with GET request</h1>
      {data &&
      data.map((item) => (
        <UsersList key={item.id} item={item}/>
      ))
      }
      <div className={styles.btnWrapper}>
        <Button text={'Show more'} className={'secondary'}/>
      </div>
    </div>
  );
};

export default Users;
