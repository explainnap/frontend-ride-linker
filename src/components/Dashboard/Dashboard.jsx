import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getAllUsers } from "../../services/userService";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Welcome, {user.username}</h1>
      <p>This dashboard page shows all registered users:</p>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.username}</li>
        ))}
      </ul>
    </main>
  );
};

export default Dashboard;
