// EditService.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest'; // Adjust the import path based on your project structure

const EditService = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await apiRequest.get(`/service/get-service/${id}`);
        setService(response.data.service);
      } catch (error) {
        setError('Failed to fetch service');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Edit Service</h1>
      {service && (
        <div>
          <p>Service Name: {service.name}</p>
          {/* Add your form or other components to edit the service */}
        </div>
      )}
    </div>
  );
};

export default EditService;
