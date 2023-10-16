
import '../../Styles/Home.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <a href="#">
          <h1 className="feamobile3">Testimonials</h1>
        </a>
        <div className='all-test'>
          <div className="single-test">
            <FaQuoteLeft className='icon-test' />
            <p className="text">
              I have been trading with Tech Net for the past year and so far i
              can say they are one of the best suppliers of electronics.
              They offer the best rates and also amazing customer service
            </p>
            <FaQuoteRight className='icon-test1' />
            <div className='cred1'>
              <img src={require('../../Images/Testimonials/1.jpg')} alt="" />
              <p><strong>Lebga Lesly</strong></p>
            </div>
          </div>
          <div className="single-test">
          <FaQuoteLeft className='icon-test' />
            <p className="text"> 
              Initially i have always had doubt when it comes to trading with
              online vendors. It took alot of effort for me to start trading
              with Tech Net but i can say with all certainty that i have had an
              amazing experience so far. I appreciate Tech Net for their amazing
              service and look forward to more trades with them
            </p>
            <FaQuoteRight className='icon-test1' />
            <div className='cred'>
              <img src={require('../../Images/Testimonials/2.jpg')} alt="" />
              <p><strong>Tafon Herbert</strong></p>
            </div>
          </div>
          <div className="single-test">
          <FaQuoteLeft className='icon-test' />
            <p className="text">
              I was approached by a friend telling me about an Online vendor he
              has been trading with. At first i had my doubts considering the
              fact that most online transactions i have been involved in didn't
              end well. After so much persuation from him i decided to give it a
              try and honestly the experience was amazing. I encourage everyone
              to try them out. You won't regret it
            </p>
            <FaQuoteRight className='icon-test1' />
            <div className='cred2'>
              <img src={require('../../Images/Testimonials/3.jpg')} alt="" />
              <p> <strong>Bongmibo Cynthia</strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
