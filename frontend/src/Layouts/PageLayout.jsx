import { Outlet, NavLink, Link } from 'react-router-dom';
import { FaRegHeart, FaOpencart } from 'react-icons/fa';
import '../Styles/PageLayout.css';
import { useLogout } from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';
/*   Components */
import Footer from '../Components/Home components/Footer';

const PageLayout = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <header>
        <nav className="nav">
          <Link className="logo">TECH NET</Link>
          <nav>
           
            {user && (
              <>
                 <NavLink to="/" className="link">
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
                  <div className="cart-count">
                    <FaOpencart className="link" />
                    <div className="count">2</div>
                  </div>
                </Link>
                <Link className="link">
              <FaRegHeart className="link" />
            </Link>
            <div className="auth-button">
                <span>{user.name}</span>
                <button onClick={handleClick}>LogOut</button>
              </div>
              </>
            )}

            {!user && (
              <div className="auth-link">
                <Link to="login">Login</Link>
                <Link to="signup">Signup</Link>
              </div>
            )}
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
