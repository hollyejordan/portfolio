import styles from "./page.module.css";
import Image from 'next/image';
import LinkButton from "./components/LinkButton/LinkButton";
import ExploreCard from "./components/ExploreCard/ExploreCard";

export default function Home() {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.pfpContainer}>
          <Image
            className={styles.pfp}
            src="/profile-pic.jpg"
            fill
            alt="Portrait of the author"
          />
        </div>
        <div>
          <h1>Hi, I'm Holly.</h1>
          <p>I'm a recent computing graduate with a passion for developing software and web applications. I have experience working on collaborative and independent projects, including full stack web applications and embedded IoT systems. I'm eager to contribute to a development team and grow through industry experience.</p>
          <LinkButton path="/contact" innerText="Contact Me"></LinkButton>
        </div>
      </div>
      
      <div className={styles.exploreSection}>
        <h2>Take a look around</h2>
        <div className={styles.exploreCards}>
          <ExploreCard title="About" path="/about" thumbnail="" description="Learn more about who I am and what drives me."/>
          <ExploreCard title="Projects" path="/projects" thumbnail="/projects-thumbnail.png" description="Explore some of the projects I've built and what I've learned from them."/>
          <ExploreCard title="Resume" path="/resume" thumbnail="" description="See my experience, skills and education."/>
          <ExploreCard title="Contact" path="/contact" thumbnail="" description="I'd love to hear from you - feel free to reach out with any questions!"/>
        </div>
      </div>
    </>
  );
}