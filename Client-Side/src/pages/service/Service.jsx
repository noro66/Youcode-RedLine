import './Service.scss'
import InfiniteCarousel from "infinite-react-carousel";
import {useParams} from "react-router-dom";
import {QueryClient, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {timeformater} from "../../utils/time/time.js";
import {useEffect, useState} from "react";
import Review from "../../component/review/Review.jsx";
import Reviews from "../../component/reviews/Reviews.jsx";

const Service = () => {
    const {id} = useParams();
    const queryClient = useQueryClient();
    const { isPending, isLoading, error, data, refetch} = useQuery({ queryKey: ['service', id],
        queryFn: ()=> customAxios.get(`service/${id}`).then(res => res.data.service) });
    const dataQuery = queryClient.getQueryData(['service', id]);
    console.log(dataQuery, 'tested');

    const stars = Math.round(data?.total_stars/data?.star_number) ; // ??
    useEffect(() => {
        refetch();
        console.log(queryClient.getQueryData('service'));
    }, []);

    return(
        isPending ? "Loading..." : error ? "Ops Something went wrong !" : <div className="service">
                <div className="container">
                    <div className="left">
                        <span className="breadCrumbs">Drill >  Water Drilling > </span>
                        <h1>{/**/data.title}</h1>
                        <div className="user">
                            <div className="pp">
                                <div className="pp">
                                    <img src="/images/profile.svg" alt=""/>
                                </div>
                            </div>
                            <span> {/**/data?.seller.user.username} </span>
                            <div className="stars">
                                {stars > 0 ? (
                                    Array.from({length: stars}, (_, index) => (
                                        <img key={index} src="/images/icons8-star-48.png" alt=""/>
                                    ))
                                ) : (
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                )}
                                <span>{stars}</span>
                            </div>
                        </div>
                        <InfiniteCarousel
                            arrows={true}
                            slidesToShow={1}
                            arrowsBlock={false}
                            arrowsToScroll={1}
                            dots={false}
                            showControls={true}
                            showStatus={false}
                            breakpoints={{
                                768: {
                                    showDots: true,
                                    showStatus: true,
                                    arrowsBlock: true,
                                },
                            }}
                        >
                            {/**/data?.images.map((image, index) => (<img src={image.image_url} alt=""/>))}
                        </InfiniteCarousel>
                        <h1> About This Service </h1>
                        <p>{/**/data?.desc}</p>
                        <div className="seller">
                            <h2>About The Service Provider</h2>
                            <div className="user">
                                <img src="/images/profile.svg" alt=""/>
                                <div className="info">
                                    <span>{/**/data?.seller.user.username}</span>
                                    <div className="stars">
                                        {stars > 0 ? (
                                            Array.from({length: stars}, (_, index) => (
                                                <img key={index} src="/images/icons8-star-48.png" alt=""/>
                                            ))
                                        ) : (
                                            <img src="/images/icons8-star-48.png" alt=""/>
                                        )}
                                        <span>{stars}</span>
                                    </div>
                                    <button>Contact Me</button>
                                </div>
                            </div>
                            <div className="box">
                                <div className="items">
                                    <div className="item">
                                        <span className="title">From</span>
                                        <span className="desc">{/**/data?.seller.user.city ?? 'Casablanca'}</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Member since</span>
                                        <span className="desc">{/**/timeformater(data?.seller.created_at)}</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Avg response time</span>
                                        <span className="desc">4 hours</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">last delivery </span>
                                        <span className="desc">1 day</span>
                                    </div>
                                    <div className="item">
                                        <span className="title">Language</span>
                                        <span className="desc">English</span>
                                    </div>
                                </div>
                                <hr/>
                                <p>{/**/data?.seller.description}</p>
                            </div>
                        </div>
                    <Reviews reviews={data?.reviews} queryClient={queryClient} service_id={data.id} />
                    </div>
                    <div className="right">
                        <div className="price">
                            <h3>{/**/data?.short_title}</h3>
                            <h2>${/**/data?.price}</h2>
                        </div>
                        <p>{/**/data?.short_desc}</p>
                        <div className="details">
                            <div className="item">
                                <img src="/images/icons8-hour-24.png" alt=""/>
                                <span>{/**/data?.revision_time} days Revisioin</span>
                            </div>
                            <div className="item">
                                <img src="/images/icons8-recycle-60.png" alt=""/>
                                <span>{/**/data?.delivery_time} days Delivery</span>
                            </div>
                        </div>
                        <div className="features">
                            {data?.features.map((item, index) => (
                                <div className="item">
                                    <img src="/images/icons8-check-mark-48.png" alt=""/>
                                    <span>{item?.name}</span>
                                </div>
                            ))}
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
        </div>
    )
}

export default Service