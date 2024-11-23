// src/components/RoleManagement.js
import React, { useState, useEffect } from 'react';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import { roles } from '../mockData'; // Importing mock data for roles

const RoleManagement = ({ userRole }) => {
  const [roleData, setRoleData] = useState(roles);
  const [newRole, setNewRole] = useState({ name: '', permissions: '' });

  const handleCreateRole = () => {
    if (newRole.name && newRole.permissions) {
      const newRoleData = { ...newRole, id: roleData.length + 1 };
      setRoleData([...roleData, newRoleData]);
      setNewRole({ name: '', permissions: '' });
    }
  };

  const handleDeleteRole = (roleId) => {
    setRoleData(roleData.filter((role) => role.id !== roleId));
  };

  return (
    <div>
      <h3>Role Management</h3>
      {/* Using Grid system for responsiveness */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Permissions"
            value={newRole.permissions}
            onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleCreateRole} fullWidth>
            Create Role
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roleData.map((role) => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell>
                  {/* Only show delete button if user is an admin */}
                  {userRole === 'admin' && (
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteRole(role.id)}
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RoleManagement;
