import '../../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import SamsungPhoneData from '../Product Data.jsx/Samsung Phone Data';

const SamsungPhone = () => {
  return (
    <>
      <div className="product-container">
        {SamsungPhoneData.products.map((product) => {
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

export default SamsungPhone;
