import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrganizationList = () => {
  const [organizations, setOrganizations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/organization');
        console.log('Response Status:', response.status); // Log status
        console.log('Response Data:', response.data); // Log data
        if (response.data && Array.isArray(response.data.data)) {
          setOrganizations(response.data.data);
        } else {
          setOrganizations([]); // Set to empty array if data structure is not as expected
        }
      } catch(error) {
        console.error('Error fetching organizations:', error.response ? error.response.data : error.message);
      }

    };

    fetchOrganizations();
  }, []);

  const handleAddOrganization = () => {
    navigate('/organizations/create'); // Redirect to create form
  };

  const handleEditOrganization = (id) => {
    navigate(`/organizations/${id}`); // Navigate to details
  };

  return (
      <div>
        <h1>Organizations</h1>
        <button onClick={handleAddOrganization}>+</button>
        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          {organizations.map(org => (
              <tr key={org.id}>
                <td>{org.id}</td>
                <td>{org.name}</td>
                <td>{org.country}</td>
                <td>{org.status}</td>
                <td>
                  <button onClick={() => handleEditOrganization(org.id)}>Edit</button>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default OrganizationList;