import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import customAxios from "../../../CustomAxios.js";
import './ServicesApprove.scss';
import { imageFromat } from "../../utils/imgaes/ImageFormat.js";

function ServicesApprove() {
    const [services, setServices] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await customAxios.get('/servicestoApprove');
            const services = response.data;
            setServices(services);
            setIsPending(false);
        } catch (error) {
            setError(error);
            setIsPending(false);
        }
    };

    const handleApprove = async (serviceId) => {
        try {
            await customAxios.post(`aproveService/${serviceId}`);
            await fetchServices();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="services-container">
            <div className="title">
                <h1>Services to Approve</h1>
            </div>
            <table className="services-table">
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
                {isPending ? (
                    <tr>
                        <td colSpan="5">Loading...</td>
                    </tr>
                ) : error ? (
                    <tr>
                        <td colSpan="5">Ops there is an error, please try again later</td>
                    </tr>
                ) : (
                    Object.values(services).map((service) => (
                        <tr key={service.id}>
                            <td>
                                <img className="service-image" src={imageFromat(service.cover_image)} alt=""/>
                            </td>
                            <td>{service.title}</td>
                            <td>${service.price}</td>
                            <td>{service.sales}</td>
                            <td>
                                <button className="approve-btn" onClick={() => handleApprove(service.id)}>
                                    Approve
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}

export default ServicesApprove;
