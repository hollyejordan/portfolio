import getData from "@/app/lib/getData";
import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import HouseplantWebsite from "../project_components/HouseplantWebsite";
import TranscriptionGlasses from "../project_components/TranscriptionGlasses";
import FoodWasteApp from "../project_components/FoodWasteApp";

type ProjectProps = {
  params: Promise<{ project: string }>;
}

export default async function Project({ params }: ProjectProps) {
  
  const { project } = await params;
  const data = await getData();
  const projectData = data[project];

  const components: Record<string, React.FC> = {
    "houseplant-monitoring-system": HouseplantWebsite,
    "live-transcription-smart-glasses": TranscriptionGlasses,
    "food-waste-management-app": FoodWasteApp,
  };

  const SelectedComponent = components[project];

  if (!SelectedComponent) {
    notFound();
  }

  return <div className={styles.projectBody}>
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
    <SelectedComponent />
  </div>
}