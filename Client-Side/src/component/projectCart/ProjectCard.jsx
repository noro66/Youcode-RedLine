import './ProjectCard.scss';
import {Link} from "react-router-dom";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";

const ProjectCard = ({item}) => {

    return(
        <Link to={'service/'+item?.id} className={'link'}>
            <div className="projectCard">
                <img src={imageFromat(item?.cover_image)} alt=""/>
                <div className="info">
                    <img src={item?.seller?.user.img} alt=""/>
                    <div className="texts">
                        <h2>{item.title}</h2>
                        <span>{item?.desc.substring(0,25)}...</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;