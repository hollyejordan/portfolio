export default function HouseplantWebsite() {
    return (
    <>
        <h2>Introduction</h2>
        <p>A full-stack MERN (MongoDB, Express, React, Node.js) web application that integrates with an ESP32 microcontroller to monitor and visualise live plant sensor data. The ESP32 periodically takes light and soil moisture readings and sends them via Wi-Fi to the server, for storage in the database. The front end displays a dashboard overview of each plant and evaluates its status based on the current sensor data.</p>
        <h2>Website Demonstration Video</h2>
        <iframe src="https://www.youtube.com/embed/uN9Mb3KPpdo?si=mEKfUDj2oj7XVIlN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
    )
}