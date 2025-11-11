import styles from "./page.module.css";
import Image from 'next/image';
import LinkButton from "./components/LinkButton/LinkButton";
import ExploreCard from "./components/ExploreCard/ExploreCard";
import getData from "./lib/getData";

export default async function Home() {

  const data = await getData();

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
        <h2>Featured Projects</h2>
        <div className={styles.exploreCards}>
        {data.map((project: { title: string; path: string; thumbnail: string; date: string; description: string; }) => (
          <ExploreCard
            key={project.title}
            title={project.title}
            path={project.path}
            thumbnail={project.thumbnail}
            description={project.description}/>
        ))}
        </div>
      </div>
    </>
  );
}