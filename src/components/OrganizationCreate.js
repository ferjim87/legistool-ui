import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrganizationCreate = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/country');
        console.log('Response Status:', response.status); // Log status
        console.log('Response Data:', response.data); // Log data
        setCountries(response.data); // Assuming the response is an array of countries
      } catch (error) {
        console.error('Error fetching countries', error);
      }
    };
    fetchCountries();
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/organization', { name, country });
      console.log('Response Status:', response.status); // Log status
      console.log('Response Data:', response.data); // Log data
      navigate('/organizations');
    } catch (error) {
      console.error('Error creating organization', error);
    }
  };

  const handleCancel = () => {
    navigate('/organizations');
  };

  return (
      <div>
        <h2>Create New Organization</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>
              Name:
              <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
              />
            </label>
          </div>
          <div>
            <label>
              Country:
              <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
  );
};

export default OrganizationCreate;
