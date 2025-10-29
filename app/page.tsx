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
          <p>Recent computing graduate with a passion for developing software and web applications. Experienced in collaborative and independent projects, including full stack web technologies and embedded IoT systems. Eager to contribute to a development team and grow through industry experience.</p>
          <LinkButton path="/contact" innerText="Contact Me"></LinkButton>
        </div>
      </div>
      
      
      <div className={styles.exploreSection}>
        <h2>Take a look around</h2>
        <div className={styles.exploreCards}>
          <ExploreCard title="About"/>
          <ExploreCard title="Projects" thumbnail="/projects-thumbnail.png"/>
          <ExploreCard title="Resume"/>
        </div>
      </div>
    </>
  );
}