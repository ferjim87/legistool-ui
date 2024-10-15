import React from 'react';

import Dashboard from "./components/Dashboard";
import OrganizationList from './components/OrganizationList';
import OrganizationCreate from "./components/OrganizationCreate";
import OrganizationEdit from "./components/OrganizationEdit";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/organizations" element={<OrganizationList />} />
          <Route path="/organizations/create" element={<OrganizationCreate />} />
          <Route path="/organizations/update/:id" component={<OrganizationEdit />} />
          <Route path="/organizations/:id" component={<OrganizationEdit />} />
        </Routes>
  );
}

export default App;
