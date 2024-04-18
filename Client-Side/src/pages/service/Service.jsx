import './Service.scss'
import InfiniteCarousel from "infinite-react-carousel";

const Service = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="left">
                    <span className="breadCrumbs">Drill >  Water Drilling ></span>
                    <h1>I Will Provide you a good Drilling Service</h1>
                    <div className="user">
                        <div className="pp">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                        </div>
                        <span>John doe</span>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
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
                    >   <img src="/images/picture.svg" alt=""/>
                        <img src="/images/picture.svg" alt=""/>
                        <img src="/images/picture.svg" alt=""/>
                        <img src="/images/picture.svg" alt=""/>
                        <img src="/images/picture.svg" alt=""/>
                    </InfiniteCarousel>
                    <h1>About This Service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis fugiat iusto modi molestias perferendis quae quos sed, soluta voluptatem. Dolor eaque error labore magni modi natus nemo, nobis quae.Amet culpa deleniti eaque in ipsum, ullam voluptas. Dolorem, eum ex nulla officiis sed vel velit. Architecto autem commodi eaque eius error illo, omnis optio sit, soluta ut vel veniam.Aspernatur consequuntur corporis cum delectus deleniti dicta dolore est exercitationem illo illum iste modi necessitatibus nihil nobis numquam officia perspiciatis praesentium, quam repellendus similique velit veniam voluptas voluptate. Iste, temporibus?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda, commodi consequuntur dolore eum exercitationem facere ipsa minus odio odit quam quisquam ratione repellat repudiandae, rerum saepe sapiente tempora vitae.Id quisquam vel vitae! Animi aspernatur assumenda, atque, blanditiis dolor dolore eligendi ex incidunt ipsum iusto laboriosam, laudantium magnam nihil non nostrum optio possimus sed tenetur ullam unde voluptas voluptate.</p>
                    <div className="seller">
                        <h2>About The Service Provider</h2>
                        <div className="user">
                                <img src="/images/profile.svg" alt=""/>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                    <img src="/images/icons8-star-48.png" alt=""/>
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">Morocco</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2022</span>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, eligendi error eveniet facere ipsum quam voluptates. Accusamus, beatae est ex fugiat inventore nobis obcaecati quo quod repudiandae similique tempore ullam!</p>

                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <div className="pp">
                                    <img src="/images/profile.svg" alt=""/>
                                </div>
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="country">
                                        <img src="/images/icons8-morocco-48.png" alt=""/>
                                        <span>Morocco</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/images/icons8-star-48.png" alt=""/>
                                <img src="/images/icons8-star-48.png" alt=""/>
                                <img src="/images/icons8-star-48.png" alt=""/>
                                <img src="/images/icons8-star-48.png" alt=""/>
                                <img src="/images/icons8-star-48.png" alt=""/>
                                <span>5</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <span>Yes</span>
                                <img src="/images/icons8-facebook-like-50.png" alt=""/>
                                <span>No</span>
                                <img src="/images/icons8-dislike-64.png" alt=""/>

                            </div>
                        </div>
                        <hr/><div className="item">
                        <div className="user">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="country">
                                    <img src="/images/icons8-morocco-48.png" alt=""/>
                                    <span>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                        <div className="helpful">
                            <span>Helpful?</span>
                            <span>Yes</span>
                            <img src="/images/icons8-facebook-like-50.png" alt=""/>
                            <span>No</span>
                            <img src="/images/icons8-dislike-64.png" alt=""/>

                        </div>
                    </div>
                        <hr/><div className="item">
                        <div className="user">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="country">
                                    <img src="/images/icons8-morocco-48.png" alt=""/>
                                    <span>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                        <div className="helpful">
                            <span>Helpful?</span>
                            <span>Yes</span>
                            <img src="/images/icons8-facebook-like-50.png" alt=""/>
                            <span>No</span>
                            <img src="/images/icons8-dislike-64.png" alt=""/>

                        </div>
                    </div>
                        <hr/><div className="item">
                        <div className="user">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="country">
                                    <img src="/images/icons8-morocco-48.png" alt=""/>
                                    <span>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                        <div className="helpful">
                            <span>Helpful?</span>
                            <span>Yes</span>
                            <img src="/images/icons8-facebook-like-50.png" alt=""/>
                            <span>No</span>
                            <img src="/images/icons8-dislike-64.png" alt=""/>

                        </div>
                    </div>
                        <hr/><div className="item">
                        <div className="user">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="country">
                                    <img src="/images/icons8-morocco-48.png" alt=""/>
                                    <span>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                        <div className="helpful">
                            <span>Helpful?</span>
                            <span>Yes</span>
                            <img src="/images/icons8-facebook-like-50.png" alt=""/>
                            <span>No</span>
                            <img src="/images/icons8-dislike-64.png" alt=""/>

                        </div>
                    </div>
                        <hr/><div className="item">
                        <div className="user">
                            <div className="pp">
                                <img src="/images/profile.svg" alt=""/>
                            </div>
                            <div className="info">
                                <span>John Doe</span>
                                <div className="country">
                                    <img src="/images/icons8-morocco-48.png" alt=""/>
                                    <span>Morocco</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <img src="/images/icons8-star-48.png" alt=""/>
                            <span>5</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium amet consequatur deserunt eligendi enim eos exercitationem laboriosam magnam maiores nam nisi nulla quaerat quia quisquam quo vel voluptates voluptatum!</p>
                        <div className="helpful">
                            <span>Helpful?</span>
                            <span>Yes</span>
                            <img src="/images/icons8-facebook-like-50.png" alt=""/>
                            <span>No</span>
                            <img src="/images/icons8-dislike-64.png" alt=""/>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>water Drilling</h3>
                        <h2>$340</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid suscipit tempore.</p>
                    <div className="details">
                        <div className="item">
                            <img src="/images/icons8-hour-24.png" alt=""/>
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/images/icons8-recycle-60.png" alt=""/>
                            <span>2 days Delivery</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/images/icons8-check-mark-48.png" alt=""/>
                            <span>Lorem ipsum dolor.</span>
                        </div>
                        <div className="item">
                            <img src="/images/icons8-check-mark-48.png" alt=""/>
                            <span>Lorem ipsum dolor.</span>
                        </div>
                        <div className="item">
                            <img src="/images/icons8-check-mark-48.png" alt=""/>
                            <span>Lorem ipsum dolor.</span>
                        </div>
                        <div className="item">
                            <img src="/images/icons8-check-mark-48.png" alt=""/>
                            <span>Lorem ipsum dolor.</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Service