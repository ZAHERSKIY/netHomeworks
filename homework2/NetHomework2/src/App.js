import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uSurname) => {
    setUsersList(prevUserList => {
      return [
        ...prevUserList,
        { name: uName, surname: uSurname, id: Math.random().toString() },
      ];
    });
  };

  const deleteHandler = id => {
    return setUsersList([...userList.filter(user => user.id !== id)]);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} onDeleteUser={deleteHandler} />
    </React.Fragment>
  );
}

export default App;
