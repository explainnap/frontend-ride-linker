import logo from '../../assets/logo.png'; // ✅ Add this import at the top

function About() {
  return (
    <main>
      <img 
        src={logo} 
        alt="RideLinker Logo" 
        style={{ width: '200px', marginBottom: '2rem' }} 
      />
      <h1>About RideLinker 🚴‍♂️</h1>
      <p>
        RideLinker is your all-in-one cycling group management app.
        Create groups, plan rides, and keep track of your cycling adventures.
      </p>
      <p>
        Whether you're a weekend warrior or a mountain master, RideLinker helps you
        stay connected with your cycling community.
      </p>
      <h2>Features:</h2>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
        <li>Create and manage cycling groups 🚲</li>
        <li>Add and track rides for each group 🛣️</li>
        <li>Plan distances and monitor ride completion ✅</li>
        <li>Future features: route planning, user profiles, and more!</li>
      </ul>
      <p>
        Built with ❤️  Happy riding!
      </p>
    </main>
  );
}

export default About;
