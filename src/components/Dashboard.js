
import React from 'react';

import { CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, Container } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import OrganizationList from "./OrganizationList";

const Dashboard = () => {

  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer>
          <Toolbar />
          <div>
            <List>
              <ListItem component={Link} to="/organizations">
                <ListItemText primary="Organizaciones" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main style={{ flexGrow: 1, padding: '24px', marginLeft: 0 }}>
          <Toolbar />
          <Routes>
            <Route path="/organizations" element={<OrganizationList />} />
          </Routes>
        </main>
      </div>
  </Container>
  
  );
};

export default Dashboard;
