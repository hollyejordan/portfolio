import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Projects() {

  return (
    <>
      <h1>Projects</h1>
          <ProjectCard title="Houseplant Monitoring System" path="/projects/houseplant-monitoring-system" thumbnail="/houseplant-thumbnail-16-9.png" date="Aug 2025" description="A full-stack MERN web app that integrates with an ESP microcontroller to visualise and monitor live plant sensor data."/>
          <ProjectCard title="Live Transcription Smart Glasses" path="/projects/live-transcription-smart-glasses" thumbnail="/glasses-thumbnail-16-9.jpg" date="May 2025" description="An ESP microcontroller system that projects live transcriptions of audio before your eyes, housed in a 3D printed frame."/>
          <ProjectCard title="Food Waste Management App" path="/projects/food-waste-management-app" thumbnail="/useby-thumbnail-16-9.jpg" date="May 2025" description="A React Natvie app for tracking food expiration dates and reducing food waste."/>
          <ProjectCard title="Arduino Experiments Portfolio" path="/projects/arduino-experiment-portfolio" thumbnail="/experiments-thumbnail-16-9.jpg" date="May 2024" description="description"/>
    </>
  );
}