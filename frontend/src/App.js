import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetail';
import userForm from './components/userForm';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/users">User List</Link>
        <Link to="/add-user">Add User</Link>
      </nav>

      <Routes>
        <Route path="/users/:userId" component={UserDetails} />
        <Route path="/users" component={UserList} />
        <Route path="/add-user" component={userForm} />
      </Routes>
    </Router>
  );
}

export default App;
