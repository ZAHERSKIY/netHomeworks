import React from 'react';
import styles from './UsersList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UsersList = props => {
  return (
    <ul>
      {props.users.map(user => {
        return (
          <div className={styles.users}>
            <li key={user.id}>
              {user.name} {user.surname}
              <Button onClick={() => props.onDeleteUser(user.id)}>
                Delete
              </Button>
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default UsersList;
