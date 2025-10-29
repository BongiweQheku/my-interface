function Dashboard() {
  return (

    <div>
        <h1>Welcome to the Dashboard</h1>
        <p>This is your first Dashboard. You can see you updates here</p>


        <ul>

            <li>Overview</li>
            <li>Recent activities</li>
            <li>Notifications</li>
        </ul>

            <button onClick={() => alert('Dashboard button clicked!')}>Click Me</button>
             {/* Simple Cards Section */}
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h2>Profile</h2>
          <p>Manage your personal info and settings.</p>
          <button onClick={() => alert('Profile clicked!')}>Open</button>
        </div>

        <div style={cardStyle}>
          <h2>Reports</h2>
          <p>View your recent activity and analytics.</p>
          <button onClick={() => alert('Reports clicked!')}>Open</button>
        </div>

        <div style={cardStyle}>
          <h2>Support</h2>
          <p>Get help and contact support.</p>
          <button onClick={() => alert('Support clicked!')}>Open</button>
        </div>
        </div>
    </div>
  
  );
}
export default Dashboard;
