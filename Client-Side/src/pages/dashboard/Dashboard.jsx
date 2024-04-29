import React from 'react';
import './Dashboard.scss';
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header">
                <div className="profile">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                    <span>Username</span>
                </div>
            </header>
            <section className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/dashboard/statistics">Statistics</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                        <li><Link to="/dashboard/approve">Approve Services</Link></li>
                        <button className="logout">Logout</button>
                    </ul>
                </nav>
            </section>
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};

export default Dashboard;
