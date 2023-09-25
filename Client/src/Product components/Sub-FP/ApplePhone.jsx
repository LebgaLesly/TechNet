import "../../Styles/Home.css";

const ApplePhone = () => {
    return (
        <>
             <div className="product-container">
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/11.jpeg")} alt="" />
                    <p>IPHONE 11</p>
                    <h3>FCFA 220,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/11pro.webp")} alt="" />
                    <p>IPHONE 11 Pro</p>
                    <h3>FCFA 280,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/Xmaxa.jpg")} alt="" />
                    <p>IPHONE XMax</p>
                    <h3>FCFA 200,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/7.jpeg")} alt="" />
                    <p>IPHONE 7</p>
                    <h3>FCFA 75,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/12mini.jpeg")} alt="" />
                    <p>IPHONE 12 Mini</p>
                    <h3>FCFA 320,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/14promax.webp")} alt="" />
                    <p>IPHONE 14 Pro Max</p>
                    <h3>FCFA 750,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/14.webp")} alt="" />
                    <p>IPHONE 14</p>
                    <h3>FCFA 580,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/12promax.jpg")} alt="" />
                    <p>IPHONE 12 Pro Max</p>
                    <h3>FCFA 320,000</h3>
                </div>
                <div className="single-product">
                    <img src={require("../../Images/Mobile Devices/Apple/13promax.jpeg")} alt="" />
                    <p>IPHONE 13 Pro Max</p>
                    <h3>FCFA 450,000</h3>
                </div>
            </div>
        </>
    )
}

export default ApplePhone;