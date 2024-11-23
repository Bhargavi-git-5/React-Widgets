// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoleManagement from './components/RoleManagement';
import UserManagement from './components/UserManagement';
import Navbar from './components/Navbar'; // A basic Navbar component

const App = () => {
  // Simulating a logged-in user role (either 'admin' or 'user')
  const [userRole, setUserRole] = useState('admin'); // Change to 'user' to simulate normal user

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/roles">
          <RoleManagement userRole={userRole} />
        </Route>
        <Route path="/users">
          <UserManagement userRole={userRole} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
