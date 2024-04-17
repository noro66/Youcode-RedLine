import InfiniteCarousel from 'infinite-react-carousel';
import './Slide.scss'

const Slide = ({children, slidesToShow, arrowsToScroll}) => {
    return(
        <div className="slide">
            <div className="container">
                <InfiniteCarousel
                    arrows={true}
                    slidesToShow={slidesToShow}
                    arrowsBlock={false}
                    arrowsToScroll={arrowsToScroll}
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
                    {children}
                </InfiniteCarousel>
            </div>
        </div>
    )
}

export default Slide;