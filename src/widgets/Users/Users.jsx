import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import UsersList from "../../shared/UsersList/UsersList";
import axios from "axios";
import Button from "../../shared/Button/Button";
import HeadLine from "../../shared/HeadLine/HeadLine";
const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
  axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6')
    .then(({data}) => {
      setData(data.users);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <div className={`${styles.UsersWrapper}`}>
      <HeadLine text={'Working with GET request'} className={'primary'}/>
      {/*<h1 className={styles.header}>Working with GET request</h1>*/}
      <ul className={styles.listWrapper}>
      {data &&
          data.map((item, index) =>
            <UsersList
              key={item.id}
              item={item}
              index={index}
              data ={data}
            />
          )
      }
      </ul>
      <div className={styles.btnWrapper}>
        <Button text={'Show more'} className={'secondary'}/>
      </div>
    </div>
  );
};

export default Users;
