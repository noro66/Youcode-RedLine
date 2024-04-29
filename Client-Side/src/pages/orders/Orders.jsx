import './Orders.scss'
import {Link, Navigate} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useContext, useEffect} from "react";
import {useStateContext} from "../../context/ContextProvider.jsx";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";
import {handleClick} from "infinite-react-carousel/lib/carousel/listener.js";

const Orders = (props) => {
    const {user, token} = useStateContext();

    const { isPending, isLoading, error, data : orders, refetch} = useQuery({ queryKey: ['orders', user?.id],
        queryFn: ()=> customAxios.get(`myOrders`).then(res => res?.data?.orders) });
   const handleCancel = (id)=>{
       if (confirm("Are you sure you want to Cancel this order?")){
           customAxios.delete(`order/${id}`).then(_ => refetch())
               .catch(r => console.log(r));
       }
    }
    const handleAccept = (id)=>{
       if (confirm("Are you sure you want to Accept this order?")){
           customAxios.post(`accept/${id}`).then(_ => refetch())
               .catch(r => console.log(r));
       }
    }
    const handelComplete = (id)=>{
       if (confirm("is This Service complete ?")){
           customAxios.post(`completed/${id}`).then(_ => navigate(`/service/${order.service_id}`))
               .catch(r => console.log(r));
       }
    }

    useEffect(() => {
        refetch();
    }, [orders]);

    if (!token) {
        return <Navigate to="/login" replace/>;
    }
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
                    <th>Status</th>
                    <th>{user?.isSeller ? 'Client' : 'Service Provider'}</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? "Loading..." : error ? "Ops an Error !" : orders?.map((order) => (

                   <tr key={order.id}>
                        <td>
                            <Link className={'link'} to={`/service/${order.id}`}>
                            <img className={'img'} src={imageFromat(order.image)} alt=""/>
                            </Link >
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price} $</td>
                        <td>{order.status ? <span className={'green-span'}>Accepted</span> : <span className={'gray-span'}>pending</span> } </td>
                        <td>{user?.isSeller ? order?.client?.user?.username : order?.seller[0]?.user?.username}</td>
                        <td>
                            {(user?.isSeller && !order?.status) ? <button onClick={()=> handleAccept(order.id)} className={'green-btn'}> Accept </button> :
                                (!user?.isSeller && !order?.status) &&  <button onClick={()=> handleCancel(order.id)} className={'red-btn'}> Cancel </button>
                            }
                            { order.status ? ( order.is_completed ? <span className={'green-span'}> Completed</span> :
                                    <span className={'gray-span'}>working on it </span>) : ''
                            }

                            {(!user?.isSeller && order?.status && !order.is_completed) ? (
                                <button onClick={()=> handelComplete(order.id)} className={'complete'}>Complete?</button>
                            ) : null}
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