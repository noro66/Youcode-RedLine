
import './Dashboard.scss';
import {Link, Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header"></header>
            <section className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/dashboard/statistics">statistics</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                        <li><Link to="/dashboard/approve">Approve Services</Link></li>
                    </ul>
                </nav>
            </section>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};

export default Dashboard;
