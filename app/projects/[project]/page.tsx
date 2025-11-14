import getData from "@/app/lib/getData";

type ProjectProps = {
  params: Promise<{ project: string }>;
}

export default async function Project({ params }: ProjectProps) {
  
  const { project } = await params;
  const data = await getData();
  const projectData = data[project];

  return <>
    <p>ID: {project}</p>
    <p>{projectData.title}</p>
  </>
}