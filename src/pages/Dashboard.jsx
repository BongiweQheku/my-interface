function Dashboard() {
  return (
    <div className="container">
        <h1>Welcome to the Dashboard</h1>
        {/*Put cards in one of the wrapers */}
        <div className="card-wraper">
          <div className="card">
            <h1 className="title">This is your first Dashboard. You can see you updates here</h1>
        <p className="content">
           <ul>
            <li>Overview</li>
            <li>Recent activities</li>
            <li>Notifications</li>
        </ul>
        </p>
        </div>

        <div className="card">
            <h1 className="title">This is your first Dashboard. You can see you updates here</h1>
        <p className="content">
           <ul>
            <li>Overview</li>
            <li>Recent activities</li>
            <li>Notifications</li>
        </ul>
        </p>
        </div>

        <div className="card">
            <h1 className="title">This is your first Dashboard. You can see you updates here</h1>
        <p className="content">
           <ul>
            <li>Overview</li>
            <li>Recent activities</li>
            <li>Notifications</li>
        </ul>
        </p>
        </div>
         <div className="card">
            <h1 className="title">This is your first Dashboard. You can see you updates here</h1>
        <p className="content">
           <ul>
            <li>Overview</li>
            <li>Recent activities</li>
            <li>Notifications</li>
        </ul>
        </p>
        </div>

            <button onClick={() => alert('Dashboard button clicked!')}>Click Me</button>
           
        
    </div>
    </div>
  
  );
}
export default Dashboard;
