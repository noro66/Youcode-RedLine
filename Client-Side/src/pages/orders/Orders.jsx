import './Orders.scss'
import {Link} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useContext, useEffect} from "react";
import {useStateContext} from "../../context/ContextProvider.jsx";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";
import {handleClick} from "infinite-react-carousel/lib/carousel/listener.js";

const Orders = (props) => {
    const {user} = useStateContext()
    const { isPending, isLoading, error, data : orders, refetch} = useQuery({ queryKey: ['orders', user.id],
        queryFn: ()=> customAxios.get(`myOrders`).then(res => res.data.orders) });
   const handleClick = (id)=>{
       if (confirm("Are you sure you want to Cancel this order?")){
           customAxios.delete(`order/${id}`).then(_ => refetch())
               .catch(r => console.log(r));
       }
    }
    useEffect(() => {
        refetch();
    }, [orders]);
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
                            <img className={'img'} src={imageFromat(order.image)} alt=""/>
                        </td>
                        <td>{order.title}</td>
                        <td>{order.price} $</td>
                        <td>{order.status ? <span className={'green-span'}>Accepted</span> : <span className={'gray-span'}>pending</span> } </td>
                        <td>{user?.isSeller ? order?.client?.user?.username : order?.seller?.user?.username}</td>
                        <td>
                            {(user?.isSeller && !order?.status) ? <button className={'green-btn'}> Accept </button> :
                                (!user?.isSeller && !order?.status) &&  <button onClick={()=> handleClick(order.id)} className={'red-btn'}> Cancel </button>
                            }
                            {!user?.isSeller && order?.status ? (
                                <button className={'complete'}>Complete?</button>
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