const Features = () => {
  return (
    <>
      <section className="section-feature">
        <div className="fe-box">
          <img src={require('../../Images/Features/free shipping1.png')} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require('../../Images/Features/Online order2.png')} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={require('../../Images/Features/Save Money3.png')} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={require('../../Images/Features/Promotions4.png')} alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require('../../Images/Features/Happy sell5.png')} alt="" />
          <h6>Happy Sales</h6>
        </div>
        <div className="fe-box">
          <img src={require('../../Images/Features/24 on 7 support.png')} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>
    </>
  );
};

export default Features;
