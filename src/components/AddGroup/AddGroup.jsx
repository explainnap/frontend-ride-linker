import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addGroup } from '../../services/groupsServices';

function AddGroup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    distance: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addGroup(formData);
      navigate('/groups');
    } catch (err) {
      console.error(err);
      setMessage('Error adding group. Please try again.');
    }
  };

  return (
    <main>
      <h1>Add Group</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Group Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="distance">Distance:</label>
        <input
          type="text"
          id="distance"
          name="distance"
          value={formData.distance}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Group</button>
        <button type="button" onClick={() => navigate('/groups')} className="secondary">
          Cancel
        </button>
      </form>
    </main>
  );
}

export default AddGroup;
