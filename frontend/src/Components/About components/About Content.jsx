
import '../../Styles/About.css';


const AboutContent = () => {
    return(
        <>
         <section id="about-head">
         <img src={require("../../Images/About/2.jpg")} alt=""/>
         <div>
            <h1>Who Are We?</h1>
            <p>Welcome to Tech Net!
                     <br/>
               We aim to offer our customers a variety of the latest Products. We’ve come a long way, 
               so we know exactly which direction to take when supplying you with high quality yet budget-friendly products.
                We offer all of this while providing excellent customer service and friendly support.
                <br/>
                We always keep an eye on the latest trends in Products and put our customers’ wishes first.
                That is why we have satisfied customers all over the world, and are thrilled to be a part of the products industry.
                  <br/>
               The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.</p>
         </div>
      </section>
      
      <section id="about-app">
         <h1>Download Our <a href="">App</a></h1>
         <div class="video">
            <video  autoplay muted loop src={require("../../Images/About/3.mp4")}></video>
         </div>
      </section>
        </>
    )
}

export default AboutContent;