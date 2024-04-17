import './CategoCard.scss';
import {Link} from "react-router-dom";

const CategoCard = ({item}) => {
    return(
        <Link to={'services?category='+item.id}>
            <div className="categoCard">
                <img src={item.image} alt=""/>
                <span className={'desc'}>{item.description}</span>
                <span className={'title'}>{item.title}</span>
            </div>
        </Link>
    )
}

export default CategoCard;