import { Outlet, NavLink, Link } from 'react-router-dom';
import { FaRegHeart, FaRegUserCircle, FaOpencart } from 'react-icons/fa';
import '../Styles/PageLayout.css';

/*   Components */
import Footer from '../Home components/Footer';

const PageLayout = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <Link className="logo">TECH NET</Link>
          <nav>
            <NavLink index className="link">
              Home
            </NavLink>
            <NavLink to="product" className="link">
              Products
            </NavLink>
            <NavLink to="articles" className="link">
              Blog
            </NavLink>
            <NavLink to="about" className="link">
              About
            </NavLink>
            <NavLink to="contact" className="link">
              Contact
            </NavLink>
            <Link>
              <div className='cart-count'>
                <FaOpencart className="link" />
                <div className="count">2</div>
              </div>
            </Link>
            <Link className="link">
              <FaRegHeart className="link" />
            </Link>
            <Link className="link">
              <FaRegUserCircle className="link" />
            </Link>
          </nav>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PageLayout;
