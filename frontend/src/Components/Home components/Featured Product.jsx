
/* imports */
import { FaShoppingBag, FaHeart, FaStar, FaRegStar } from 'react-icons/fa';
import AccessoryProducts from '../Product components/Accessory Products';
import ProductData from './Home Product Data';

const FeaturedProduct = () => {
  return (
    <>
      <section className="products-section">
        <a href="#">
          <h1 className="feamobile">Mobile Devices</h1>
        </a>
        <div className="product-container">
          {ProductData.phone.map((product) => {
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
                      <h3>FCFA {product.price}</h3>
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
      </section>
      <section className="products-section">
        <a href="#">
          <h1 className="feamobile1">TV Sets</h1>
        </a>
        <div className="product-container">
          {ProductData.tv.map((product) => {
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
      </section>

      <section className="banner">
        <div className="article">
          <h1>
            Exclusive <span>Offer</span>{' '}
          </h1>
          <p>
            Get the latest <span>IPhone</span> from us at a discount for <br />{' '}
            the first 20 orders. Don't miss out!!{' '}
          </p>
          <button>Order Now</button>
        </div>

        <div className="banner-des">
          <h1>
            IPhone <span>15</span>{' '}
          </h1>
          <p>
            Now <span>Available</span> for Order. Swap deals possible😉{' '}
          </p>
        </div>
      </section>
      <AccessoryProducts />
    </>
  );
};

export default FeaturedProduct;
