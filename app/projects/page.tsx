import ProjectCard from "../components/ProjectCard/ProjectCard";
import getData from "../lib/getData";

export default async function Projects() {

  const data = await getData();

  return (
    <>
      <h1>Projects</h1>
      {data.map((project: { id: string; title: string; thumbnail: string; date: string; description: string; }) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          path={`projects/${project.id}`}
          thumbnail={project.thumbnail}
          date={project.date}
          description={project.description}/>
      ))}
    </>
  );
}