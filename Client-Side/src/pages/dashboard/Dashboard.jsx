
import './Dashboard.scss';
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="header"></header>
            <section className="sidebar"></section>
            <main className="main">
                <Outlet/>
            </main>
        </div>
    );
};

export default Dashboard;
