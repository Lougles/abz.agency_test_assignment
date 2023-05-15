import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import UsersList from "../../shared/UsersList/UsersList";
import axios from "axios";
import Button from "../../shared/Button/Button";
import HeadLine from "../../shared/HeadLine/HeadLine";
const Users = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
  axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
    .then(({data}) => {
      if (data.page === data.total_pages) {
          setIsButtonDisabled(true);
      }
      console.log(data);
      setData(data.users);
    })
    .catch(err => {
      console.error(err);
    })
  }, [page]);
  const handleShowMore = () => {
    setPage(page + 1)
  }
  return (
    <div className={`${styles.UsersWrapper}`}>
      <HeadLine text={'Working with GET request'} className={'primary'}/>
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
        {!isButtonDisabled && <Button text={'Show more'} className={'secondary'} onClick={handleShowMore}/>}
      </div>
    </div>
  );
};

export default Users;
