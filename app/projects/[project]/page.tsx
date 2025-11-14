type ProjectProps = {
  params: Promise<{ project: string }>;
}

export default async function Project({ params }: ProjectProps) {
  const { project } = await params
  return <>
    <h1>ID: {project}</h1>
  </>
}