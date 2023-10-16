
import '../../Styles/Product.css';
import { Outlet, Link } from 'react-router-dom';

// Components imports
import HeadBanner from './Head Banner';
import AccessoryProducts from './Accessory Products';
import FootBanner from '../Home components/Foot Banner';

const Product = () => {
  return (
    <>
      <HeadBanner />
      <a href="">
        <h1 className="feamobile"> Featured Products</h1>
      </a>
      <div className="products">
        <div className="sidebar">
          <a href="">
            <h1 className="feamobile">Catergories</h1>
          </a>
          <aside>
            <Link to="/" className="Link">
              Apple Phone
            </Link>
            <Link to="samsungphone" className="Link">
              Samsung Phone
            </Link>
            <Link to="hisensetv" className="Link">
              Hisense Tv
            </Link>
            <Link to="samsungtv" className="Link">
              Samsung Tv
            </Link>
          </aside>
        </div>

        <div className='other'>
          <Outlet />
        </div>
      </div>
      <section className="product-banner">
        <h1>
          Exclusive <span>Offer</span>{' '}
        </h1>
        <p>
          Get up to <span>40%</span> Discount on deals
        </p>
        <button>Shop Now</button>
      </section>
      <AccessoryProducts />
      <FootBanner />
    </>
  );
};

export default Product;
