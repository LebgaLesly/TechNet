import '../../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import ApplePhoneData from '../Product Data.jsx/Apple Phone Data';

const ApplePhone = () => {
  return (
    <>
      <div className="product-container">
        {ApplePhoneData.products.map((product) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default ApplePhone;
