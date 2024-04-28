import React from 'react';
import  './Users.scss'
import {useStateContext} from "../../context/ContextProvider.jsx";
import {Navigate} from "react-router-dom";

const Users = () => {
   // const {token} = useStateContext();
   // if (!token){
   //     return  <Navigate to={'/login'} replace/>
   // }
    return (
        <div className="users">
            <h2 className="title">Users Management</h2>
            <div className="flashMessage">
                {/* Flash message content */}
            </div>
            <table className="table">

            </table>
        </div>
    );
};

export default Users;
