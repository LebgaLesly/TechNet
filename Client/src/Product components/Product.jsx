/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Styles/Product.css';
import { Outlet, Link } from 'react-router-dom';

// Components imports
import HeadBanner from './Head Banner';

const Product = () => {
  return (
    <>
      <HeadBanner />
      <a href="">
        <h1 className="feamobile"> Featured Products</h1>
      </a>
      <div className="products">
        <div className="sidebar">
            <a href=""><h1 className="feamobile">Catergories</h1></a>
          <aside>
            <Link index className="Link">
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

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Product;
