import './Home.scss'
import Featured from "../../component/featured/Featured.jsx";
import TrustedBy from "../../component/trustedBy/TrustedBy.jsx";
import Slide from "../../component/slide/Slide.jsx";
import {cards, projects} from '../../data.js';
import CategoCard from "../../component/categoCart/CategoCard.jsx";
import ProjectCard from "../../component/projectCart/ProjectCard.jsx";
import {useQuery} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useEffect} from "react";
import {useStateContext} from "../../context/ContextProvider.jsx";

const Home = () => {

    const { isPending, isLoading, error, data: categories, refetch} = useQuery({ queryKey: ['categories'],
        queryFn: ()=> customAxios.get('home').then(res => res.data.categories) });
    const {setCategories} = useStateContext();

    useEffect(() => {
        refetch();
        setCategories(categories);
    }, [categories]);
    return (
    <div className={'home'}>
        <Featured/>
        <TrustedBy/>
        {isLoading ? "loading..." : error ?  "Ops there is an error" :
            <Slide slidesToShow={5} arrowsToScroll={5}>
                {categories && categories.map((card) => (
                    <CategoCard item={card} key={card.id}/>
                ))}
            </Slide> }
        <div className="features">
            <div className="container">
                <div className="item">
                    <h1>The best drilling services at your fingertips</h1>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        The best for your budget
                    </div>
                    <p>
                        Find hight-quality service at every price. No hourly rates, just project-based pricing.
                    </p>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        Quality work done quickly
                    </div>
                    <p>
                        Find the right service provider to begin working for your project within minutes .
                    </p>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        Protected payments, every time
                    </div>
                    <p>
                        Always know what you'll pay upfront, Your payment ins't released until You approve the work
                    </p>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        24/7 support
                    </div>
                    <p>
                        Our team is always here to answer your questions and provide support 24 hour per day 7 days per
                        week
                    </p>
                </div>
                <div className="item">
                    <video src='./videos/video.webm'
                           controls></video>
                </div>
            </div>
        </div>
        <div className="features dark">
            <div className="container">
                <div className="item">
                    <h1>Drill Business</h1>
                    <h1>A Business solution designed for teams </h1>
                    <p>Upgrade to accurate experience packed with tools and benefits, dedicated to businesses</p>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        connect to service providers with proven business experience
                    </div>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        Get matched with the perfect talent by customer success manager
                    </div>
                    <div className="title">
                        <img src="./images/checkicon.png" alt=""/>
                        Manage teamwork and boost productivity with one powerful workspace
                    </div>
                    <button>Explore Drill Business</button>
                </div>
                <div className="item">
                    <img src="./images/teamwork.svg" alt=""/>
                </div>
            </div>
        </div>
        {isPending ? "loading..." : error ? 'Ops There is an Error ' :
            categories.length > 0 && <Slide slidesToShow={4} arrowsToScroll={4}>
                {categories.map((cat) => {
                    if (cat.services && cat.services.length > 0) {
                        return <ProjectCard item={cat.services[0]} key={cat.services[0].id} />;
                    }
                    return null;
                })}
            </Slide>
        }
    </div>
)
};

export default Home;