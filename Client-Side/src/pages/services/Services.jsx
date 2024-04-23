import './Services.scss'
import {useEffect, useRef, useState} from "react";
import {projects, servicesData} from "../../data.js";
import ServiceCard from "../../component/serviceCard/ServiceCard.jsx";
import customAxios from "../../../CustomAxios.js";
import {useQuery} from "@tanstack/react-query";
import service from "../service/Service.jsx";
import {useLocation} from "react-router-dom";

const Services = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');
    const minRef = useRef(null);
    const maxRef = useRef(null);
    const {search} = useLocation();
    console.log(search);
    const {isLoading, error, data, refetch} = useQuery({ queryKey: ['repoData'],
            queryFn: ()=> customAxios.get(`service${search ? search :  '?'}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res => res.data.services) });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    function fetchData() {
        refetch();
    }

    useEffect(() => {
        refetch()
    }, [sort]);

    return (
    <div className="services">
        <div className="container">
            <span className="breathcrumbs">Drill > Water Drilling ></span>
            <h1>Custom Category</h1>
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
                {isLoading ? "Loading..." : error ?  "Something Went Wrong !" :  data.length > 0 ?   data.map(service => (
                    <ServiceCard key={service.id} item={service} />
                )) : <p className="alert">Ops there is no Service with this specifications !</p>}
            </div>
        </div>
    </div>
)
};

export default Services;