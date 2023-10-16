
import '../../Styles/Home.css';

const FootBanner = () => {
  return (
    <>
      <section id="newsletter">
        <div className="newstext">
          <h4>Sign Up for Newsletter</h4>
          <p>
            Get E-mail updates about our latest products and{' '}
            <span>special offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Email Address" />
          <button>Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default FootBanner;
