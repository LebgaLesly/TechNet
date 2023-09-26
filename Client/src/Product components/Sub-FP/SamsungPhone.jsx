import '../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';

const SamsungPhone = () => {
  return (
    <>
      <div className="product-container">
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/note5.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p> GALAXY NOTE 5</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 170,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/a40.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>SAMSUNG A40</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 150,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/note8.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY NOTE 8</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h3>FCFA 250,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/a13.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY A13</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 130,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/a24.webp')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>SAMSUNG A24</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 150,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/s9.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY S9</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 150,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/s22.webp')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY S22</p>
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
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/s6.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY S6</p>
              <div className="rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
              </div>
              <h3>FCFA 65,000</h3>
            </div>
            <div className="details-icons">
              <FaShoppingBag className="bag" />
              <FaHeart className="heart" />
            </div>
          </div>
        </div>
        <div className="single-product">
          <img
            src={require('../../Images/Mobile Devices/Samsung/note6.jpg')}
            alt=""
          />
          <div className="details">
            <div className="details-all">
              <p>GALAXY NOTE 6</p>
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
      </div>
    </>
  );
};

export default SamsungPhone;
