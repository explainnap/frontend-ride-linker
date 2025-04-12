import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import logo from '../../assets/logo.png'; // ✅ Make sure you place your logo in src/assets/

const Landing = () => {
  const { user } = useContext(UserContext);

  return (
    <main>
      <img 
        src={logo} 
        alt="RideLinker Logo" 
        style={{ width: '200px', marginBottom: '2rem' }} 
      />
      <h1>Welcome to RideLinker 🚴‍♂️</h1>
      <p>
        {user
          ? `Glad to have you back, ${user.username}! 🚀`
          : 'Your all-in-one app for cycling groups and rides.'}
      </p>

      <nav className='logged-in'>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {user ? (
            <>
              <li><Link to="/dashboard"><button>Go to Dashboard</button></Link></li>
              <li><Link to="/groups"><button>View Groups</button></Link></li>
              <li><Link to="/about"><button>About the App</button></Link></li>
            </>
          ) : (
            <>
              <li><Link to="/signin"><button>Sign In</button></Link></li>
              <li><Link to="/signup"><button>Sign Up</button></Link></li>
              <li><Link to="/groups"><button>View Groups</button></Link></li>
              <li><Link to="/about"><button>About the App</button></Link></li>
            </>
          )}
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
