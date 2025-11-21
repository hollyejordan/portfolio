export default function HouseplantWebsite() {
    return (
    <>
        <h2>Introduction</h2>
        <p>A full-stack MERN (MongoDB, Express, React, Node.js) web application that integrates with an ESP32 microcontroller to monitor and visualise live plant sensor data. The ESP32 periodically takes light and soil moisture readings and sends them via Wi-Fi to the server, for storage in the database. The front end displays a dashboard overview of each plant and evaluates its status based on the current sensor data.</p>
        <h2>Website Demonstration</h2>
        <iframe src="https://www.youtube.com/embed/uN9Mb3KPpdo?si=mEKfUDj2oj7XVIlN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h2>Background</h2>
        <h3>The Problem</h3>
        <p>Some people find it challenging to care for their houseplants and keep them healthy within their home. Since poor care can lead to plant stress or plant death, it's important to care for plants properly.</p>
        <p>Some common challenges are:</p>
        <ul>
            <li>Understanding the specific care and conditions that a plant requires</li>
            <li>Knowing the actual conditions within your home, such as light levels</li>
            <li>Remembering to water a plant, or knowing the best time to do so</li>
            <li>Adjusting plant care in line with seasonal changes</li>
            <li>Interpreting plant feedback, which is often slow or ambiguous, such as yellowing leaves</li>
        </ul>
        <h3>The Solution</h3>
        <h2>Features</h2>
        <ul>
            <li>Dashboard overview displaying all plants with real-time status icons</li>
            <li>Individual plant profiles showing detailed plant and sensor data</li>
            <li>Live soil moisture and light readings recorded by ESP32 sensors</li>
            <li>External API integration to fetch missing plant data</li>
            <li>Graphs visualising historical sensor data</li>
            <li>Forms to add new plants or edit existing information</li>
        </ul>
        <h2>System Architecture</h2>
        <h2>Links</h2>
        <ul>
            <li>
                <a href="https://github.com/hollyejordan/Devised-Project" target="_blank">GitHub Repository</a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=uN9Mb3KPpdo" target="_blank">YouTube Video Demonstration</a>
            </li>
        </ul>
    </>
    )
}