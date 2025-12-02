import Link from "next/link";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./ProjectCard.module.css";
import Image from "next/image";

type ProjectCardProps = {
    title: string;
    path: string;
    thumbnail: string;
    date: string;
    description: string;
}

export default function ProjectCard({ title, path, thumbnail, date, description }: ProjectCardProps) {

  return (
    <Link href={path} className={`${styles.projectCard} thinBorderBox`}>
        <div className={styles.thumbnailContainer}>
            <Image
                className={styles.thumbnail}
                src={thumbnail}
                fill
                alt={`${title} project thumbnail`}
            />
        </div>
        <div className={styles.intro}>
            <div>
                <h3>{title}</h3>
                <h5>{date}</h5>
            </div>
            <p>{description}</p>
            <LinkButton path={path} innerText="Read More"></LinkButton>
        </div>
    </Link>
  );
}