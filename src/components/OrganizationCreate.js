import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as useNavigate } from 'react-router-dom';

const CreateOrganization = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newOrg = { name, country }; // Default status

    try {
      await axios.post('http://localhost:8080/api/organization', newOrg);
      setMessage('Organization created successfully!');
      navigate('/'); // Redirect back to organizations page
    } catch (error) {
      setMessage('Error creating organization');
    }
  };

  return (
      <div>
        <h1>Create Organization</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
          </div>
          <div>
            <label>Country:</label>
            <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
            />
          </div>
          <button type="submit">Create</button>
        </form>
        {message && <p>{message}</p>}
      </div>
  );
};

export default CreateOrganization;
