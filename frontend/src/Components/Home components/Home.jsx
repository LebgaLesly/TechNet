import '../../Styles/Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaSearch } from 'react-icons/fa';

//image import
import image1 from '../../Images/Mobile Devices/Apple/banner2.jpg';
import image2 from '../../Images/Mobile Devices/Samsung/banner2.jpg';
import image3 from '../../Images/TV/Samsung/banner2.jpg';


//Componets import
import FeaturedProduct from './Featured Product';
import Feature from './Features';
import Testimonials from './Testimonials';
import FootBanner from './Foot Banner';

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
  banner: true
};

const Home = () => {
  return (
    <>
      <div className="search">
        <form action="#">
          <input type="text" placeholder=" Search Products" name="search" />
          <FaSearch className="icon-search" />
        </form>
      </div>
      <div className="carousel-element">
        <Carousel {...settings}>
          <div className="img-container">
            <div className="detail">
              <h2>iPhone models</h2>
              <p>
                Experience the best{' '}
                <span>
                  <strong>IPhone</strong>
                </span>{' '}
                deals at with just a click{' '}
              </p>
              <button>View More</button>
            </div>
            <img src={image1} alt="" />
          </div>
          <div className="img-container">
            <div className="detail">
              <h2>samsung models</h2>
              <p>
                Experience the best{' '}
                <span>
                  <strong>Samsung</strong>
                </span>{' '}
                deals at with just a click{' '}
              </p>
              <button>View More</button>
            </div>
            <img src={image2} alt="" />
          </div>
          <div className="img-container">
            <div className="detail">
              <h2>TV models</h2>
              <p>
                Experience the best{' '}
                <span>
                  <strong>Tv Sets</strong>
                </span>{' '}
                deals at with just a click{' '}
              </p>
              <button>View More</button>
            </div>
            <img src={image3} alt="" />
          </div>
        </Carousel>
      </div>
      <Feature />
      <FeaturedProduct />
      <Testimonials />
      <FootBanner />
     
    </>

  );
};

export default Home;
