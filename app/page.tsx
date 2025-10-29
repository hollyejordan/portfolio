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
        <h2>Featured Projects</h2>
        <div className={styles.exploreCards}>
          <ExploreCard title="Houseplant Monitoring System" path="/projects/houseplant-monitoring-system" thumbnail="/houseplant-thumbnail-16-9.png" description="A full-stack MERN web app that integrates with an ESP microcontroller to visualise and monitor live plant sensor data."/>
          <ExploreCard title="Live Transcription Smart Glasses" path="/projects" thumbnail="/glasses-thumbnail-16-9.jpg" description="An ESP microcontroller system that projects live transcriptions of audio before your eyes, housed in a 3D printed frame."/>
          <ExploreCard title="Food Waste Management App" path="/contact" thumbnail="/useby-thumbnail-16-9.jpg" description="A React Natvie app for tracking food expiration dates and reducing food waste."/>
          <ExploreCard title="Arduino Experiments Portfolio" path="/resume" thumbnail="/experiments-thumbnail-16-9.jpg" description=""/>
        </div>
      </div>
    </>
  );
}