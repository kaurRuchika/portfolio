import BackToTopButton from "../backToTopButton/BackToTopButton";
import WorkList from "../workList/WorkList";
import Footer from "../footer/Footer";
import "./Work.css";

export default function Work() {
  return (
    <section className="work-main">
      <h2 className="work-title">Work Experience</h2>

      <p className="work-intro">
        Throughout my career, I've contributed to high-impact projects, building
        scalable web applications and optimizing frontend performance. I thrive
        in collaborative environments, delivering innovative and efficient
        solutions.
        <br />
        Explore my professional journey below! 🚀
      </p>

      <article className="work-article">
        <WorkList />
      </article>

      <BackToTopButton />

      <Footer />
    </section>
  );
}
