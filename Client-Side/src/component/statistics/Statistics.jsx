import {useEffect, useState} from 'react';
import './Statistics.scss';
import customAxios from "../../../CustomAxios.js";

const Statistics = () => {
    const [statistics, setStatistics] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        try {
            const response = await customAxios.get('/statistics');
            console.log(response.data);
            setStatistics(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!statistics) {
        return <div>Loading...</div>;
    }

    return (
        <div className="statistics-container">
            <h2>Statistics</h2>
            <div className="grid-container">
                <div className="statistic">
                    <div className="label">Total Users:</div>
                    <div className="value">{statistics?.totalUsers}</div>
                </div>
                <div className="statistic">
                    <div className="label">Clients:</div>
                    <div className="value">{statistics?.clients}</div>
                </div>
                <div className="statistic">
                    <div className="label">Sellers:</div>
                    <div className="value">{statistics?.sellers}</div>
                </div>
                <div className="statistic">
                    <div className="label">Services:</div>
                    <div className="value">{statistics?.services}</div>
                </div>
                <div className="statistic">
                    <div className="label">Orders:</div>
                    <div className="value">{statistics?.orders}</div>
                </div>
                <div className="statistic">
                    <div className="label">Total Sales:</div>
                    <div className="value">{statistics?.totalSales}</div>
                </div>
            </div>
        </div>

    );
};

export default Statistics;
