import React, { useState, useEffect } from 'react';
import './Users.scss';
import customAxios from "../../../CustomAxios.js";
import Pagination from '../pagination/Pagination.jsx';

function Users() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState(null);
    const [paginationData, setPaginationData] = useState(null); // State to store pagination data

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async (url = '/users') => {
        try {
            const response = await customAxios.get(url);
            setUsers(response.data.data);
            setPaginationData(response.data);
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to fetch users' });
        }
    };

    const handlePageChange = async (url) => {
        try {
            await fetchUsers(url);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleRestrict = async (userId, restricted) => {
        try {
            await customAxios.post(`users/${userId}/toggle-restrict`, { restricted });
            await fetchUsers();

            setMessage({ type: 'success', text: 'User status updated successfully' });
        } catch (error) {
            console.log(error);
            setMessage({ type: 'error', text: 'Failed to update user status' });
        }
    };

    return (
        <main className="users">
            <div className="container">
                <h2 className="title">
                    Users Management
                </h2>

                {message && (
                    <div className={`flashMessage ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <div className="tableWrapper">
                    <table className="table">
                        <thead className="tableHead">
                        <tr>
                            <th className="cell">Name</th>
                            <th className="cell">Email</th>
                            <th className="cell">Status</th>
                            <th className="cell">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="tableRow">
                                <td className="cell">{user.username}</td>
                                <td className="cell">{user.email}</td>
                                <td className="cell">{user.is_restricted ? 'Restricted' : 'Active'}</td>
                                <td className="cell">
                                    <div className="flex">
                                        <button onClick={() => toggleRestrict(user.id)} className={`button ${ user.is_restricted ? "green" : "red"}`}>
                                            {/* SVG here */}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Render Pagination component with pagination data and handlePageChange function */}
                {paginationData && (
                    <Pagination links={paginationData.links} onPageChange={handlePageChange} />
                )}
            </div>
        </main>
    );
}

export default Users;
