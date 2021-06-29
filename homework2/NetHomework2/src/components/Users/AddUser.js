import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');

  const addUserHandler = e => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredSurname.trim().length === 0) {
      return;
    }
    props.onAddUser(enteredName, enteredSurname);
    setEnteredName('');
    setEnteredSurname('');
  };

  const nameChangeHadler = event => {
    setEnteredName(event.target.value);
  };

  const surnameChangeHadler = event => {
    setEnteredSurname(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={enteredName}
          onChange={nameChangeHadler}
          placeholder='Enter your name...'
        />
        <label htmlFor='surname'>Surname</label>
        <input
          id='surname'
          type='text'
          value={enteredSurname}
          onChange={surnameChangeHadler}
          placeholder='Enter your surname...'
        />
        <Button type='submit'>Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
