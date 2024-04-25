import './ProjectCard.scss';
import {Link} from "react-router-dom";

const ProjectCard = ({item}) => {
    const service = item.services[0];
    console.log('service : ',service);
    return(
        <Link to={'services?project='+service.id} className={'link'}>
            <div className="projectCard">
                <img src={service.cover_image} alt=""/>
                <div className="info">
                    <img src={service.seller.user.img} alt=""/>
                    <div className="texts">
                        <h2>{item.title}</h2>
                        <span>{service.title.substring(0,10)}...</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;