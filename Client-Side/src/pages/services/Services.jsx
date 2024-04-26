import './Services.scss'
import {useEffect, useRef, useState} from "react";
import {projects, servicesData} from "../../data.js";
import ServiceCard from "../../component/serviceCard/ServiceCard.jsx";
import customAxios from "../../../CustomAxios.js";
import {QueryClient, useQuery, useQueryClient} from "@tanstack/react-query";
import service from "../service/Service.jsx";
import {useLocation, useParams} from "react-router-dom";

const Services = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');
    const minRef = useRef(null);
    const maxRef = useRef(null);
    const {search} = useLocation();
    const {category} = useParams();
    console.log(search, category);

    const queryClient = useQueryClient();
    const {isPending, error, data, refetch} = useQuery({
        queryKey: ['services'],
        queryFn: () => customAxios.get(`services${search ? search : '?'}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res => res.data),
        staleTime: 50000,
        initialData: () => {
            // Use 'services' key to retrieve initial data
            const serviceData = queryClient.getQueryData('services');
            console.log(serviceData);
            // Manipulate or filter the data as needed
            // return serviceData?.find((serviceItem) => serviceItem.id === parseInt(id));
        }
    });
    const queryData = queryClient.getQueryData('services');

    console.log(queryData);
    console.log();

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    function fetchData() {
        refetch();
    }

    useEffect(() => {
        refetch()
    }, [sort, search]);

    return (
    <div className="services">
        <div className="container">
            <span className="breathcrumbs">Drill > Water Drilling ></span>
            <h1>Services : </h1>
            <p>Explore the boundaries of Drill service Lorem ipsum dolor sit.</p>
            <div className="menu">
                <div className="left">
                    <span>Budget</span>
                    <input type="text" ref={minRef} placeholder={'min'}/>
                    <input type="text" ref={maxRef} placeholder={'max'}/>
                    <button onClick={fetchData}>apply</button>
                </div>
                <div className="right">
                    <span className={'sortBy'}>Sort By</span>
                    <span className={'sortType'}>{sort === 'sales' ? "Best Selling" : "Newest"}</span>
                    <img src="./images/icons8-down-50.png" alt="" onClick={()=>{setOpen(!open)}}/>
                    {open &&
                        <div className="rightMenu">
                            {sort === 'sales' ? <span onClick={() => reSort('latest')}>Newest</span>
                                : <span onClick={()=> reSort('sales')} >Best Selling</span>}
                        </div>}
                </div>
            </div>
            <div className="cards">
                {isPending ? "Loading..." : error ?  "Something Went Wrong !" :  data?.services.length > 0 ?   data?.services.map(service => (
                    <ServiceCard key={service.id} item={service} />
                )) : <p className="alert">Ops there is no Service with this specifications !</p>}
            </div>
        </div>
    </div>
)
};

export default Services;