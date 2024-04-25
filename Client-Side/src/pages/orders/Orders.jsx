import './Orders.scss'
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useContext} from "react";
import {useStateContext} from "../../context/ContextProvider.jsx";

const Orders = (props) => {

    const {user} = useStateContext()
    const { isPending, isLoading, error, data : orders, refetch} = useQuery({ queryKey: ['orders', user.id],
        queryFn: ()=> customAxios.get(`myOrders`).then(res => res.data.orders) });

    return (
    <div className={'myOrders'}>
        <div className="container">
            <div className="title">
                <h1>Orders</h1>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>{user?.isSeller ? 'Client' : 'Service Provider'}</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? "Loading..." : error ? "Ops an Error !" : orders.map((order) => (
                    <tr key={order.id}>
                        <td>
                            <img className={'img'} src={order.image} alt=""/>
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price} $</td>
                        <td>{user?.isSeller ? order?.client?.user?.username : order?.seller?.user?.username}</td>
                        <td>
                            <button>
                                <img className={'rounded pointer'} src="/images/icons8-message-48.png" alt=""/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
)
};

export default Orders;