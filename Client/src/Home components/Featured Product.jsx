


const FeaturedProduct = () => {
    return (
        <>
            <section>
                <a href="#"><h1 className="feamobile">Mobile  Devices</h1></a>
                <div className="product-container">
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Apple/11.jpeg")} alt="" />
                        <p>IPHONE 11</p>
                        <h3>FCFA 220,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Apple/11pro.webp")} alt="" />
                        <p>IPHONE 11 Pro</p>
                        <h3>FCFA 280,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Apple/Xmaxa.jpg")} alt="" />
                        <p>IPHONE XMax</p>
                        <h3>FCFA 200,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Samsung/note5.jpg")} alt="" />
                        <p> GALAXY NOTE 5</p>
                        <h3>FCFA 170,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Samsung/a40.jpg")} alt="" />
                        <p>SAMSUNG A40</p>
                        <h3>FCFA 150,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/Mobile Devices/Samsung/note8.jpg")} alt="" />
                        <p>GALAXY NOTE 8</p>
                        <h3>FCFA 250,000</h3>
                    </div>
                </div>
            </section>
            <section>
            <a href="#"><h1 className="feamobile">TV Sets</h1></a>
            <div className="product-container">
                    <div className="single-product">
                        <img src={require("../Images/TV/Hisense/1.jpg")} alt="" />
                        <p>HISENSE</p>
                        <h3>FCFA 310,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/TV/Hisense/2.jpg")} alt="" />
                        <p>HISENSE</p>
                        <h3>FCFA 350,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/TV/Hisense/3.jpeg")} alt="" />
                        <p>HISENSE</p>
                        <h3>FCFA 350,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/TV/Samsung/3.jpeg")} alt="" />
                        <p>SAMSUNG</p>
                        <h3>FCFA 300,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/TV/Samsung/7.webp")} alt="" />
                        <p>SAMSUNG</p>
                        <h3>FCFA 320,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../Images/TV/Samsung/5.jpg")} alt="" />
                        <p>SAMSUNG</p>
                        <h3>FCFA 380,000</h3>
                    </div>
                </div>
            </section>

            <section className="banner">
                <div>
                    <h1>Exclusive Offer</h1>
                    <p>Get the latest iPhone from us at a discount for the first 20 orders </p>
                    <button>Order Now</button>
                </div>
                
            </section>
        </>
    )
}

export default FeaturedProduct;