import getData from "@/app/lib/getData";
import Image from "next/image";
import styles from "./page.module.css";

type ProjectProps = {
  params: Promise<{ project: string }>;
}

export default async function Project({ params }: ProjectProps) {
  
  const { project } = await params;
  const data = await getData();
  const projectData = data[project];

  return <>
    <div className={styles.banner}>
      <Image
        src={projectData.thumbnail}
        fill
        style={{objectFit: "cover"}}
        alt={`${projectData.title} project thumbnail`}
      />
      <div className={styles.title}>
        <h1>{projectData.title}</h1>
        <p>{projectData.date}</p>
      </div>
    </div>
    <h2>Introduction</h2>
    <p>{projectData.description}</p>
  </>
}