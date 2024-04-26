import './ServiceCard.scss'
import {Link} from "react-router-dom";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";

const ServiceCard = ({item}) => {
    return (
        <Link to={`/service/${item?.id}`} className={'link'}>
            <div className="serviceCard">
                <img src={imageFromat(item?.cover_image)} alt=""/>
                <div className="info">
                    <div className="user">
                        <img src={imageFromat(item?.user.img)} alt=""/>
                        <span>{item?.user.username}</span>
                    </div>
                    <p>{item?.title.slice(0, 20)}</p>
                    <div className="star">
                        <img src="./images/icons8-star-48.png" alt=""/>
                        <span>{Math.round(item?.total_stars / item?.star_number)}</span>
                    </div>
                </div>
                <hr/>
                <div className="details">
                    <img src="./images/icons8-heart-50.png" alt=""/>
                    <div className="price">
                        <span>Starting At </span>
                        <h2>{item?.price} $</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard;