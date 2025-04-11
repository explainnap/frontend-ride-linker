import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import AddGroup from './components/AddGroup/AddGroup';
import AddRide from './components/AddRide/Addride';
import Groups from './components/Groups/Groups';
import Rides from './components/Rides/Rides';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/groups/:groupId/rides" element={<Rides />} />
        <Route path="/add-group" element={<AddGroup />} />
        <Route path="/add-ride/:groupId" element={<AddRide />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
