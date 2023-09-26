import '../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';

const ApplePhone = () => {
  return (
    <>
      <div className="product-container">
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/11.jpeg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 11</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 220,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/11pro.webp')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 11 Pro</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>FCFA 280,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/Xmaxa.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE XMax</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 200,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/7.jpeg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 7</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 75,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/12mini.jpeg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 12 Mini</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 320,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/14promax.webp')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 14 Pro Max</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>FCFA 750,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/14.webp')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 14</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 580,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/12promax.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 12 Pro Max</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>FCFA 320,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Apple/13promax.jpeg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>IPHONE 13 Pro Max</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>FCFA 450,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplePhone;
