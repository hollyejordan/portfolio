import styles from "./ExploreCard.module.css"
import Image from "next/image";

type ExploreCardProps = {
  title: string;
  thumbnail: string;
}

export default function ExploreCard({ title, thumbnail }: ExploreCardProps) {


  return (
    <div className={`${styles.exploreCard} thinBorderBox`}>
        <Image
        className={styles.thumbnail}
            src={thumbnail}
            fill
            alt="Projects thumbnail"
          />
        <div className={styles.expandable}>
          <h3>{title}</h3>
          <p>This is a short description of what this page is.</p>
        </div>
    </div>
  );
}