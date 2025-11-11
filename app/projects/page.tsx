import ProjectCard from "../components/ProjectCard/ProjectCard";
import getData from "../lib/getData";

export default async function Projects() {

  const data = await getData();

  return (
    <>
      <h1>Projects</h1>
      {data.map((project: { title: string; path: string; thumbnail: string; date: string; description: string; }) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          path={project.path}
          thumbnail={project.thumbnail}
          date={project.date}
          description={project.description}/>
      ))}
    </>
  );
}