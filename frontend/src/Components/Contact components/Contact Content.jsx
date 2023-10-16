
import '../../Styles/Contact.css';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaRegClock } from 'react-icons/fa';


const ContactContent = () => {
  return (
    <>
    <section className="banner-contact">
         <div className="intro">
            <h2>#Let Us Talk</h2>
            <p>Leave us a Message. We love to hear from you</p>
         </div>
      </section>

      <section id="contact-details">
         <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
               <li>
                  <FaLocationArrow className="icons-contact"/>
                  <p>Bepanda Ambiance Douala</p>
               </li>
               <li>
                  <FaEnvelope className="icons-contact"/>
                  <p>Leslysoftwarespecialist@gmail.com</p>
               </li>
               <li>
                  <FaPhoneAlt className="icons-contact"/>
                  <p>+237 677089358</p>
               </li>
               <li>
                  <FaRegClock className="icons-contact"/>
                  <p>Monday to Saturday: 9.00am to 6.00pm</p>
               </li>
            </div>
         </div>
         <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919
            .175114290683!2d9.72091206977539!3d4.062415200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i
            768!4f13.1!3m3!1m2!1s0x10610d8f44614511%3A0xe9218c486c34a7d2!2sBocom%20Bepanda%20Ambiance!5e0!3m2!1sen!2scm!4v1689967070260!5m2!1sen!2scm" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </section>

      <section id="form-details">
         <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text"  placeholder="Your Name"/>
            <input type="text"   placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button>Submit</button>
         </form>

      </section>
    </>
  ) 
};

export default ContactContent;
