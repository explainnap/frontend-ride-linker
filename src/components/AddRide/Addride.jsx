import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addRide } from '../../services/groupsServices';

function AddRide() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    distanceSpeed: '',
    isComplete: false,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRide(groupId, formData);
      navigate(`/groups/${groupId}/rides`);
    } catch (err) {
      console.error(err);
      setMessage('Error adding ride. Please try again.');
    }
  };

  return (
    <main>
      <h1>Add Ride</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ride Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="distanceSpeed">Distance/Speed:</label>
        <input
          type="text"
          id="distanceSpeed"
          name="distanceSpeed"
          value={formData.distanceSpeed}
          onChange={handleChange}
          required
        />

        <label>
          <input
            type="checkbox"
            name="isComplete"
            checked={formData.isComplete}
            onChange={handleChange}
          />
          Mark as Complete
        </label>

        <button type="submit">Add Ride</button>
        <button type="button" onClick={() => navigate(`/groups/${groupId}/rides`)} className="secondary">
          Cancel
        </button>
      </form>
    </main>
  );
}

export default AddRide;
