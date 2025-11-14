import ProjectCard from "../components/ProjectCard/ProjectCard";
import getData from "../lib/getData";
import { Project } from "../types/project";

export default async function Projects() {

  const data = await getData();

  return (
    <>
      <h1>Projects</h1>
      {Object.keys(data).map((slug: string) => {
        const project: Project = data[slug];
        return (
          <ProjectCard
            key={slug}
            title={project.title}
            path={`projects/${slug}`}
            thumbnail={project.thumbnail}
            date={project.date}
            description={project.description}
          />
        );
      })}
    </>
  );
}