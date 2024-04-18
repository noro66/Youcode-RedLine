import './ServiceCard.scss'
import {Link} from "react-router-dom";

const ServiceCard = ({item}) => {
    return (
        <Link to={`/service/${item.id}`} className={'link'}>
            <div className="serviceCard">
                <img src={item.image} alt=""/>
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt=""/>
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc.slice(0, 20)}</p>
                    <div className="star">
                        <img src="./images/icons8-star-48.png" alt=""/>
                        <span>{item.star}</span>
                    </div>
                </div>
                <hr/>
                <div className="details">
                    <img src="./images/icons8-heart-50.png" alt=""/>
                    <div className="price">
                        <span>Starting At </span>
                        <h2>{item.price}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard;