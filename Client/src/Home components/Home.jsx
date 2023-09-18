
import "../Styles/Home.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


//image import
import image1 from "../Images/Mobile Devices/Apple/banner2.jpg";
import image2 from "../Images/Mobile Devices/Samsung/banner2.jpg";
import image3 from "../Images/TV/Samsung/banner2.jpg";

//Componets import
import FeaturedProduct from "./Featured Product"
import Feature from "./Features"



const settings = {
    showArrows: false,
    interval: 5000,
    dynamicHeight: true,
    stopOnHover: true,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 50,
    showThumbs: false,
    showIndicators: false,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
    banner: true,
  };


const Home = () => {
    return (

        <>
            <div className="carousel-element">
                <Carousel {...settings}>
                    <div className="img-container">
                        <div className="detail">
                            <h2>iPhone models</h2>
                            <p>Experience the best <span><strong>Iphone</strong></span> deals at with just a click </p>
                            <button>View More</button>
                        </div>
                        <img src= {image1} />
                    </div>
                    <div className="img-container">
                        <div className="detail">
                        <h2>samsung models</h2>
                            <p>Experience the best <span><strong>Samsung</strong></span> deals at with just a click </p>
                            <button>View More</button>
                        </div>
                        <img src={image2} />
                    </div>
                    <div className="img-container">
                        <div className="detail">
                        <h2>TV models</h2>
                            <p>Experience the best <span><strong>Tv Sets</strong></span> deals at with just a click </p>
                            <button>View More</button>
                        </div>
                        <img src={image3} />
                    </div>
                </Carousel>
            </div>
            <Feature />
            <FeaturedProduct />
        </>
    )
}

export default Home;