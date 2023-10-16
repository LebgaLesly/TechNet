
import '../../Styles/Home.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="col-foot">
          <h2>
            <a href="#" className="logo">
              TECH NET
            </a>
          </h2>
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> P O Box 24200 Bepanda Ambiance, Douala,
            Littoral , Cameroon{' '}
          </p>
          <p>
            <strong>Phone:</strong> +237 677089358
          </p>
          <p>
            <strong>Hours:</strong> 24/7, Mon - Sat
          </p>
          <div className="follow">
            <h4> Follow Us: </h4>
            <div className="icon">
             <FaFacebookF  id="facebook"/>
             <FaTwitter id="twitter"/>
             <FaInstagram id="instagram"/>
             <FaPinterestP id="pinterest"/>
            <FaYoutube id="youtube"/>
            </div>
          </div>
        </div>
        <div className="col-foot">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="contact.html">Contact Us</a>
        </div>
        <div className="col-foot">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wish list</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div className="col-foot install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img src={require("../../Images/App/play.jpg")} alt="" />
            <img src={require("../../Images/App/app.jpg" )}alt="" />
          </div>
          <p>Secured payment Methods</p>
          <img src={require("../../Images/App/pay.png")} alt="" />
        </div>

        <div className="copyright">
          <p>© 2023, All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
