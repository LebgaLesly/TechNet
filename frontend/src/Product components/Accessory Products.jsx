/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import AccessoryProductData from './Product Data.jsx/Accessory Product Data';

const AccessoryProducts = () => {
  return (
    <>
      <section>
        <a href="#">
          <h2 className="feamobile2">Accessory Products</h2>
        </a>
        <div className="product-container">
        {AccessoryProductData.products.map((product) => {
        return (
              <div className="single-product">
                 <img src={product.image} alt="" />
                <div className="details">
                  <div className="details-all">
                    <p>{product.name}</p>
                    <div className="rating">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                    </div>
                    <h3>{product.price}</h3>
                  </div>
                  <div className="details-icons">
                    <FaShoppingBag className="bag" />
                    <FaHeart className="heart" />
                  </div>
                </div>
              </div>
        );
      })}
      </div>
      </section>
    </>
  );
};

export default AccessoryProducts;
