/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';

const AccessoryProducts = () => {
  return (
    <>
      <section>
        <a href="#">
          <h2 className="feamobile2">Accessory Products</h2>
        </a>
        <div className="product-container">
          <div className="single-product">
            <img
              src={require('../Images/Accessory Appliances/Blenders/1.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>BLENDERS</p>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <h3>FCFA 310,000</h3>
              </div>
              <div className="details-icons">
                <FaShoppingBag className="bag" />
                <FaHeart className="heart" />
              </div>
            </div>
          </div>
          <div className="single-product">
            <img
              src={require('../Images/Accessory Appliances/Gas Plates/1.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>GAS PLATES</p>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h3>FCFA 350,000</h3>
              </div>
              <div className="details-icons">
                <FaShoppingBag className="bag" />
                <FaHeart className="heart" />
              </div>
            </div>
          </div>
          <div className="single-product">
            <img
              src={require('../Images/Accessory Appliances/Blenders/2.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>BLENDERS</p>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <h3>FCFA 350,000</h3>
              </div>
              <div className="details-icons">
                <FaShoppingBag className="bag" />
                <FaHeart className="heart" />
              </div>
            </div>
          </div>

          <div className="single-product">
            <img
              src={require('../Images/Accessory Appliances/Gas Plates/6.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>GAS PLATES</p>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <h3>FCFA 300,000</h3>
              </div>
              <div className="details-icons">
                <FaShoppingBag className="bag" />
                <FaHeart className="heart" />
              </div>
            </div>
          </div>
          <div className="single-product">
            <img
              src={require('../Images/Accessory Appliances/Blenders/4.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>BLENDERS</p>
                <div className="ratings">
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
              src={require('../Images/Accessory Appliances/Gas Plates/7.webp')}
              alt=""
            />
            <div className="details">
              <div className="details-all">
                <p>GAS PLATES</p>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <h3>FCFA 380,000</h3>
              </div>
              <div className="details-icons">
                <FaShoppingBag className="bag" />
                <FaHeart className="heart" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessoryProducts;
