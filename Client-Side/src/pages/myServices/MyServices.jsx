import './MyServices.scss'
import {Link, Navigate} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {handleClick} from "infinite-react-carousel/lib/carousel/listener.js";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";
import {useEffect} from "react";

const MyServices = (props) => {

    const {token, user} = useStateContext();

    const queryClient = useQueryClient();

    const {isPending, isLoading, error, data: services, refetch} = useQuery({
        queryKey: ['MyServices', user.id],
        queryFn: () => customAxios.get(`myServices`).then(res => res.data.services)
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return customAxios.delete(`services/${id}`);
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(["MyServices", user.id]);
        }
    });
    useEffect(() => {
        refetch();
    }, []);
   function handleClick(id){
            if (confirm('Are you sure you want to delete this service?')) {
                mutation.mutate(id);
            }
    }

    if (!token || !user.isSeller) {
        return <Navigate to="/login" replace/>;
    }
    return (
    <div className={'myServices'}>
        <div className="container">
            <div className="title">
                <h1>Services</h1>
                <Link to="/add">
                    <button>Add New Service</button>
                </Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                { isPending ? "Loading..." : error ? "Ops there is an error please try again later" : services?.map((service) => (
                    <tr key={service?.id}>
                        <Link to={`/service/${service?.id}`}>
                            <td>
                                <img className={'img'} src={imageFromat(service?.cover_image)} alt=""/>
                            </td>
                        </Link>
                        <td>{service?.title}</td>
                        <td>{service?.price}</td>
                        <td>{service?.sales}</td>
                        <td>
                            <button>
                                <img className={'delete'} src="/images/icons8-delete-48%20(1).png" onClick={()=>handleClick(service?.id)} alt=""/>
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

export default MyServices;