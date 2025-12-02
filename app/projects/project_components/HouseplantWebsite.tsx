"use client"
import Image from "next/image";
import styles from "./HouseplantWebsite.module.css";
import React from "react";

export default function HouseplantWebsite() {

    const [tab, setTab] = React.useState(0);

    function displayTab() {

        const pages = ["dashboard", "plant profile", "add", "edit"]
        let imageSrc = "/dashboard.png"

        if (tab == 0) {
            imageSrc = "/dashboard.png";
        }
        else if (tab == 1) {
            imageSrc = "/plant-profile.png";
        }
        else if (tab == 2) {
            imageSrc = "/add-plant.png"
        }
        else {
            imageSrc = "/edit-plant.jpg"
        }

        return (
            <div className={styles.imageContainer}>
                <Image
                    src={imageSrc}
                    width={200}
                    height={200}
                    layout="responsive"
                    alt={`Screenshot of the ${pages[tab]} page`}
                />
            </div>
        )
    }

    return (
    <>
        <h2>Introduction</h2>
        <p>A full-stack MERN (MongoDB, Express, React, Node.js) web application that integrates with an ESP32 Feather microcontroller to monitor and visualise live plant sensor data. The ESP32 periodically takes light and soil moisture readings and sends them via Wi-Fi to the server, for storage in the database. The front end displays a dashboard overview of each plant and evaluates its status based on the current sensor data.</p>
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
        <p>To address these issues, this project provides users with a clear way to monitor all of their houseplants. The dashboard presents overviews of each plant, so the user can quickly identify any issues or needs. Intuitive status icons make plant feedback unambiguous, and through using real-time sensor data, the user can understand the underlying conditions in their home and identify the source of any issues. Users can take a more detailed look at any of their plants by visiting a plant's profile, which provides further information and sensor-based metrics.</p>
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
        <p>The system is based on the MERN stack, using React for the frontend, Express and Node.js for the backend, and MongoDB as a database. An ESP32 Feather microcontroller is connected, and sends sensor readings to the backend, which is then sent to and stored in the database. User plant data is also stored in the database, which is rendered dynamically on the frontend. The server also fetches omitted plant data from the Perenual plant API, such as plant images.</p>
        <div className={styles.imageContainer}>
            <Image
                src="/architecture-uml-diagram.png"
                width={200}
                height={200}
                layout="responsive"
                alt="Architecture UML Diagram"
            />
        </div>
        <h3>Frontend</h3>
        <p>The frontend is built with React for the user interface. There are four page types: the dashboard, plant profiles, add plant and edit plant.</p>
        <div className={styles.selectionBar}>
            <button onClick={() => {setTab(0)}} className="button">Dashboard</button>
            <button onClick={() => {setTab(1)}} className="button">Plant Profile</button>
            <button onClick={() => {setTab(2)}} className="button">Add Plant</button>
            <button onClick={() => {setTab(3)}} className="button">Edit Plant</button>
        </div>
        <div>
            {displayTab()}
        </div>
        
        <h3>Backend</h3>
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