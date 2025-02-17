import BackToTopButton from '../backToTopButton/BackToTopButton';
import CardList from '../cardList/CardList';
import Footer from '../footer/Footer'; 
import './Projects.css';

 export default function Projects() {
    return (
      <section className='project-main'>
        <h2 className="project">Projects</h2>

        <p className="projects-intro">My projects range from scalable web applications to real-time chat apps and dashboard solutions, each showcasing clean code, modern UI/UX, and seamless functionality. Whether it's optimizing performance, integrating APIs, or building sleek interfaces, I bring innovation and precision to every project.

Check out my work below! Let's build something amazing together. 🚀

</p>

        <article className="projects-article">
          <CardList />
        </article>

        <BackToTopButton />

        <Footer />
      </section>      
    );
  }