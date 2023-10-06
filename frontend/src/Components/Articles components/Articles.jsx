import '../../Styles/Articles.css';

//Components import
import BlogContent from './Blog Content';
import FootBanner from '../Home components/Foot Banner';

const Articles = () => {
  return (
    <>
      <section className="blog-banner">
        <h1>#Read More</h1>
        <p>Read all case studies about our products</p>
      </section>

      <BlogContent />
      <FootBanner />
    </>
  );
};

export default Articles;
