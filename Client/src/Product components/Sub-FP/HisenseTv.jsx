import '../../Styles/Home.css';
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import HisenseTvData from '../Product Data.jsx/Hisense Tv Data';

const HisenseTv = () => {
  return (
    <>
      <div className="product-container">
        {HisenseTvData.products.map((product) => {
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

export default HisenseTv;
