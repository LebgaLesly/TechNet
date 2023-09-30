import '../../Styles/Product.css';
import { FaSearch } from 'react-icons/fa';

const HeadBanner = () => {
  return (
    <>
      <div className="search">
        <form action="#">
          <input type="text" placeholder=" Search Products" name="search" />
          <FaSearch className="icon-search" />
        </form>
      </div>
      <section className="head-banner">
        <h1>Explore Our Products!</h1>
      </section>
    </>
  );
};

export default HeadBanner;
