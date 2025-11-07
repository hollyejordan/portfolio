import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    path: string;
    thumbnail: string;
    description: string;
}

export default function ProjectCard({ title, path, thumbnail, description }: ProjectCardProps) {

  return (
    <Link href={path} className={`${styles.projectCard} thinBorderBox`}>
        <div className={styles.intro}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
        </div>
        <div className={styles.thumbnailContainer}>
            <Image
                className={styles.thumbnail}
                src={thumbnail}
                fill
                alt="Projects thumbnail"
            />
        </div>
    </Link>
  );
}