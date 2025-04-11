import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

const Landing = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>Welcome to RideLinker 🚴‍♂️</h1>
      <p>
        {user
          ? `Glad to have you back, ${user.username}! 🚀`
          : 'Your all-in-one app for cycling groups and rides.'}
      </p>

      <nav>
        <ul>
          {user ? (
            <>
              <li><Link to="/dashboard">Go to Dashboard</Link></li>
              <li><Link to="/groups">View Groups</Link></li>
              <li><Link to="/about">About the App</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/groups">View Groups</Link></li>
              <li><Link to="/about">About the App</Link></li>
            </>
          )}
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
