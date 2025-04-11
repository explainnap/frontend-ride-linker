import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGroups } from '../../services/groupsServices';

function Groups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const data = await getGroups();
        setGroups(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load groups.');
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) {
    return <main><p>Loading groups...</p></main>;
  }

  if (error) {
    return <main><p style={{ color: 'red' }}>{error}</p></main>;
  }

  return (
    <main>
      <h1>Groups</h1>

      <div className="grid-container">
        {groups.map(group => (
          <div className="grid-item" key={group._id}>
            <h2>{group.name}</h2>
            <p>{group.description}</p>
            <p><strong>Distance:</strong> {group.distance}</p>
            <p><strong>Rides:</strong> {group.rides.length}</p>

            <Link to={`/groups/${group._id}/rides`}>
              <button>View Rides</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Groups;
