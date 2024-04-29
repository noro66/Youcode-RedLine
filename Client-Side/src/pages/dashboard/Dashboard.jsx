import React from 'react';
import './Dashboard.scss';
import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider.jsx";
import customAxios from "../../../CustomAxios.js";


const Dashboard = () => {
    const  {user, token, setUser, setToken} = useStateContext();

    function handelLogout() {
        if (confirm("Are you sure?")) {
            customAxios.post("auth/logout", {token: token}).then(() =>  {
                setToken(null);
                setUser(null);
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");
                navigate('/');
            }).catch(r => console.log(r));
        }
    }

   if (!token){
       return  <Navigate to="/login"/>;
   }
    return (
        <div className="dashboard">
            <header className="header">
                <div className="profile">
                    <img src={user?.img} alt="Profile" />
                    <span>{user?.username}</span>
                </div>
            </header>
            <section className="sidebar">
                <nav>
                    <ul>
                        <li><Link to="/dashboard/statistics">Statistics</Link></li>
                        <li><Link to="/dashboard/users">Users</Link></li>
                        <li><Link to="/dashboard/approve">Approve Services</Link></li>
                        <button onClick={handelLogout} className="logout">Logout</button>
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
