import BackToTopButton from '../backToTopButton/BackToTopButton';
import Footer from '../footer/Footer';
import aboutImg from '../../assets/aboutme.jpg';
import './About.css';

function About() {
  return (    
    <section>
      <h2 className='about-main'>About me</h2>

      <article className="about-article">
        <div>
          <p>I'm Ruchika Kaur &#128075; and I'm fuelled on a daily basis by tea.</p>
          <p>I love what I do and I thrive in collaborative environments, working closely with designers, backend developers, and stakeholders to bring ideas to life.</p>         
          <h3 className="highlights">Driven by innovation and continuous learning, I stay up-to-date with the latest technologies to deliver cutting-edge solutions.</h3>          
          <p>My expertise spans from responsive design and state management to performance optimization and accessibility best practices.</p>
          <h3 className="highlights">Good user experience is finding that perfect balance between the way something looks and how it works.</h3>
          <p>When I'm not working, I spent my time traveling to new places, listening music, and I really love coding!</p>
          <h3 className="highlights">Technologies I work with: HTML5, CSS3, Javascript, Typescript, Angular, Nodejs, Python, Git, Github, MongoDb</h3>          
        </div>  

        <img src={aboutImg} alt="It's me!"/> 
      </article>

      <BackToTopButton />

      <Footer />
    </section>
  );
}

export default About;