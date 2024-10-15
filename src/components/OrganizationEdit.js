import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrganizationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [organization, setOrganization] = useState({
    name: '',
    country: '',
    status: true,
  });
  const [countries, setCountries] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // To toggle between view and edit mode

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/organization/${id}`);
        setOrganization(response.data); // Assuming response.data contains the organization
      } catch (error) {
        console.error('Error fetching organization:', error);
      }
    };

    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/country');
        setCountries(response.data); // Assuming response.data contains a list of countries
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchOrganization();
    fetchCountries();
  }, [id]);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/organization/${id}`, organization);
      navigate('/organizations'); // Redirect after saving
    } catch (error) {
      console.error('Error updating organization:', error);
    }
  };

  const handleCancel = () => {
    navigate('/organizations'); // Redirect to organizations list
  };

  return (
      <div>
        <h2>{isEditing ? 'Edit Organization' : 'Organization Details'}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>ID:</label>
            <input type="text" value={id} readOnly />
          </div>
          <div>
            <label>Name:</label>
            <input
                type="text"
                value={organization.name}
                onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                required
                readOnly={!isEditing} // Disable input if not editing
            />
          </div>
          <div>
            <label>Country:</label>
            <select
                value={organization.country}
                onChange={(e) => setOrganization({ ...organization, country: e.target.value })}
                required
                disabled={!isEditing} // Disable input if not editing
            >
              {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
              ))}
            </select>
          </div>
          <div>
            <label>Status:</label>
            <button type="button" onClick={() => setOrganization({ ...organization, status: !organization.status })} disabled={!isEditing}>
              {organization.status ? 'Active' : 'Inactive'}
            </button>
          </div>
          <div>
            {isEditing ? (
                <>
                  <button type="button" onClick={handleSave}>Save</button>
                  <button type="button" onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
            )}
          </div>
        </form>
      </div>
  );
};

export default OrganizationEdit;
