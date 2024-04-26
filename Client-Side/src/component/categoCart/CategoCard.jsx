import './CategoCard.scss';
import {Link} from "react-router-dom";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";

const CategoCard = ({item}) => {
    return(
        <Link to={'services?category='+item?.id}>
            <div className="categoCard">
                <img src={imageFromat(item?.image)} alt=""/>
                <span className={'desc'}>{item?.description.substring(0,26)}...</span>
                <span className={'title'}>{item?.title.substring(0,20)}</span>
            </div>
        </Link>
    )
}

export default CategoCard;