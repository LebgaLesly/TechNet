import '../../Styles/About.css';

//Components import
import AboutContent from './About Content';
import FootBanner from '../Home components/Foot Banner';

const About = () => {
  return (
    <>
      <section className="about-banner">
        <h1>#Know Us</h1>
      </section>
      <AboutContent />
      <FootBanner />
    </>
  );
};

export default About;
