import './Services.scss'
import {useState} from "react";
import {projects, servicesData} from "../../data.js";
import ServiceCard from "../../component/serviceCard/ServiceCard.jsx";

const Services = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }
return (
    <div className="services">
        <div className="container">
            <span className="breathcrumbs">Drill > Water Drilling ></span>
            <h1>Custom Category</h1>
            <p>Explore the boundaries of Drill service Lorem ipsum dolor sit.</p>
            <div className="menu">
                <div className="left">
                    <span>Budget</span>
                    <input type="text" placeholder={'min'}/>
                    <input type="text" placeholder={'max'}/>
                    <button>apply</button>
                </div>
                <div className="right">
                    <span className={'sortBy'}>Sort By</span>
                    <span className={'sortType'}>{sort === 'sales' ? "Best Selling" : "Newest"}</span>
                    <img src="./images/icons8-down-50.png" alt="" onClick={()=>{setOpen(!open)}}/>
                    {open &&
                        <div className="rightMenu">
                            {sort === 'sales' ? <span onClick={() => reSort('CreatedAt')}>Newest</span>
                                : <span onClick={()=> reSort('sales')} >Best Selling</span>}
                        </div>}
                </div>
            </div>
            <div className="cards">
                {servicesData.map(service => (
                    <ServiceCard key={service.id} item={service} />
                ))}
            </div>
        </div>
    </div>
)
};

export default Services;