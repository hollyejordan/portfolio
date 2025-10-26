import styles from "./page.module.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.pfpContainer}>
            <Image
              className={styles.pfp}
              src="/profile-pic.jpg"
              // width={300}
              // height={300}
              fill
              alt="Portrait of the author"
            />
          </div>
          <div>
            <h1>Hi, I'm Holly.</h1>
            <p>Recent computing graduate with a passion for developing software and web applications. Experienced in collaborative and independent projects, including full stack web technologies and embedded IoT systems. Eager to contribute to a development team and grow through industry experience.</p>
            <p>.</p>
            <p>Contact Me</p>
          </div>
        </div>
      </main>
    </div>
  );
}
