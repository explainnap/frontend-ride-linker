import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGroupById } from '../../services/groupsServices';

function Rides() {
  const { groupId } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const data = await getGroupById(groupId);
        setGroup(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load group rides.');
      } finally {
        setLoading(false);
      }
    };

    fetchGroup();
  }, [groupId]);

  const toggleRideCompletion = async (rideId, isComplete) => {
    try {
      const url = `http://localhost:3000/groups/rides/${rideId}/${isComplete ? 'incomplete' : 'complete'}`;

      await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      // Update state directly for instant UI feedback
      setGroup(prevGroup => ({
        ...prevGroup,
        rides: prevGroup.rides.map(ride =>
          ride._id === rideId ? { ...ride, isComplete: !isComplete } : ride
        )
      }));

      setSuccessMessage(isComplete ? 'Ride marked as incomplete ❌' : 'Ride marked as complete ✅');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to update ride.');
    }
  };

  if (loading) return <main><p>Loading rides...</p></main>;
  if (error) return <main><p style={{ color: 'red' }}>{error}</p></main>;
  if (!group) return <main><p>No group found.</p></main>;

  return (
    <main>
      <h1>Rides for {group.name}</h1>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <Link to={`/add-ride/${group._id}`}>
        <button>Add Ride</button>
      </Link>

      <ul>
        {group.rides.map(ride => (
          <li key={ride._id} className={ride.isComplete ? 'complete' : ''}>
            <h2>{ride.name}</h2>
            <p>Distance: {ride.distance}</p>
            <p>{ride.text}</p>
            <p>Status: {ride.isComplete ? 'Complete ✅' : 'In Progress 🚴‍♂️'}</p>

            <button
              onClick={() => toggleRideCompletion(ride._id, ride.isComplete)}
            >
              {ride.isComplete ? 'Undo Complete' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Rides;
