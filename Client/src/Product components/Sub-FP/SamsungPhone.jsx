import "../../Styles/Home.css";

const SamsungPhone = () => {
    return (
        <>
             <div className="product-container">
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/note5.jpg")} alt="" />
                        <p> GALAXY NOTE 5</p>
                        <h3>FCFA 170,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/a40.jpg")} alt="" />
                        <p>SAMSUNG A40</p>
                        <h3>FCFA 150,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/note8.jpg")} alt="" />
                        <p>GALAXY NOTE 8</p>
                        <h3>FCFA 250,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/a13.jpg")} alt="" />
                        <p> A13</p>
                        <h3>FCFA 140,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/a24.webp")} alt="" />
                        <p>SAMSUNG A40</p>
                        <h3>FCFA 150,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/s9.jpg")} alt="" />
                        <p>GALAXY S9</p>
                        <h3>FCFA 150,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/s22.webp")} alt="" />
                        <p>GALAXY S22</p>
                        <h3>FCFA 440,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/s6.jpg")} alt="" />
                        <p>SAMSUNG S6</p>
                        <h3>FCFA 60,000</h3>
                    </div>
                    <div className="single-product">
                        <img src={require("../../Images/Mobile Devices/Samsung/note6.jpg")} alt="" />
                        <p>GALAXY NOTE 6</p>
                        <h3>FCFA 75,000</h3>
                    </div>
            </div>
        </>
    )
}

export default SamsungPhone;