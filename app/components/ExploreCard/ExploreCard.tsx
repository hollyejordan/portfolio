import LinkButton from "../LinkButton/LinkButton";
import styles from "./ExploreCard.module.css"
import Image from "next/image";

type ExploreCardProps = {
  title: string;
  path: string;
  thumbnail: string;
  description: string;
}

export default function ExploreCard({ title, path, thumbnail, description }: ExploreCardProps) {


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
          <LinkButton classes="takeMeThereButton" path={path} innerText="Take me there"></LinkButton>
        </div>
    </div>
  );
}