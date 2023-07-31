import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/getById/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='py-4'>
        <h2>User Details</h2>
        <table className='table border shadow'>
          <tbody>
            <tr>
              <th scope='row'>First Name:</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th scope='row'>Last Name:</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th scope='row'>Email:</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope='row'>Phone Number:</th>
              <td>{user.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
