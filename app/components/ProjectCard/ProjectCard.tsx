import LinkButton from "../LinkButton/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    path: string;
    thumbnail: string;
}

export default function ProjectCard({ title, path, thumbnail }: ProjectCardProps) {

  return (
    <div className={`${styles.projectCard} thinBorderBox`}>
        <div>
          <h3>{title}</h3>
          <LinkButton path={path} innerText="Take me there"></LinkButton>
        </div>
        <div className={styles.thumbnailContainer}>
            <Image
                className={styles.thumbnail}
                src={thumbnail}
                fill
                alt="Projects thumbnail"
            />
        </div>
        
    </div>
  );
}