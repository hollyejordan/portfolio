import styles from "./ExploreCard.module.css"
import Image from "next/image";

type ExploreCardProps = {
  title: string;
  thumbnail: string;
  description: string;
}

export default function ExploreCard({ title, thumbnail, description }: ExploreCardProps) {


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
          <p>{description}</p>
        </div>
    </div>
  );
}