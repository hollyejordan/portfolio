import ProjectCard from "../components/ProjectCard/ProjectCard";

export default function Projects() {

  return (
    <>
      <h1>Projects</h1>
          <ProjectCard title="Houseplant Monitoring System" path="/projects/houseplant-monitoring-system" thumbnail="/houseplant-thumbnail-16-9.png"/>
          <ProjectCard title="Live Transcription Smart Glasses" path="/projects/live-transcription-smart-glasses" thumbnail="/glasses-thumbnail-16-9.jpg"/>
          <ProjectCard title="Food Waste Management App" path="/projects/food-waste-management-app" thumbnail="/useby-thumbnail-16-9.jpg"/>
          <ProjectCard title="Arduino Experiments Portfolio" path="/projects/arduino-experiment-portfolio" thumbnail="/experiments-thumbnail-16-9.jpg"/>
    </>
  );
}


          // <ExploreCard title="Houseplant Monitoring System" path="/projects/houseplant-monitoring-system" thumbnail="/houseplant-thumbnail-16-9.png" description="A full-stack MERN web app that integrates with an ESP microcontroller to visualise and monitor live plant sensor data."/>
          // <ExploreCard title="Live Transcription Smart Glasses" path="/projects/live-transcription-smart-glasses" thumbnail="/glasses-thumbnail-16-9.jpg" description="An ESP microcontroller system that projects live transcriptions of audio before your eyes, housed in a 3D printed frame."/>
          // <ExploreCard title="Food Waste Management App" path="/projects/food-waste-management-app" thumbnail="/useby-thumbnail-16-9.jpg" description="A React Natvie app for tracking food expiration dates and reducing food waste."/>
          // <ExploreCard title="Arduino Experiments Portfolio" path="/projects/arduino-experiment-portfolio" thumbnail="/experiments-thumbnail-16-9.jpg" description=""/>