"use client"
import Image from "next/image";
import styles from "./HouseplantWebsite.module.css";
import React from "react";

export default function HouseplantWebsite() {

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
        <p>The system is based on the MERN stack, using React for the frontend, Express and Node.js for the backend, and MongoDB as a database. An ESP32 Feather microcontroller is connected, and sends sensor readings to the backend, which is then sent to and stored in the database. User plant data is also stored in the database, which is rendered dynamically on the frontend. The server also fetches omitted data from an API, such as plant images.</p>
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
        <p>The frontend is built with React for the user interface. It uses HTML and JavaScript, paired with pure CSS for page stylings. It is designed to be responsive across a range of screensizes, from small mobile screens to large desktops. There are four page types: the dashboard, plant profiles, add plant and edit plant.</p>
        <div className={`${styles.pageSection} ${styles.rightHeavy}`}>
            <div className={styles.imageContainer}>
                <Image
                    src="/dashboard.png"
                    width={200}
                    height={200}
                    layout="responsive"
                    alt={`Screenshot of the dashboard page`}
                />
            </div>
            <div>
                <h4>Dashboard</h4>
                <p>The dashboard page acts as the site's homepage, and displays an overview of all of the user's plants. Each plant is represented by a mini profile, which uses a component called PlantMiniProfile. Once a user's plant data is fetched from the database, each record is mapped to one of these components.</p>
                <p>Mini profiles show a plant's image, name, location, status and conditions. The status and conditions icons are calculated based on live sensor data. If no image is uploaded for a particular plant, a picture of that plant species is fetched from the Perenual API.</p>
                <p>The dashboard also includes a + button, which takes the user to a page where they can add new plants via a form.</p>
            </div>
        </div>
        <div className={`${styles.pageSection} ${styles.leftHeavy}`}>
            <div>
                <h4>Plant Profile</h4>
                <p>Each plant profile page uses a component called PlantProfile. This is used to display more in-depth detail about a specific plant, including:</p>
                <ul>
                    <li>An image of the plant</li>
                    <li>A status icon indicating current plant conditions</li>
                    <li>The species name</li>
                    <li>The location</li>
                    <li>The (placeholder) watering schedule</li>
                    <li>Current plant conditions, including current light and soil moisture levels</li>
                    <li>A graph of historic sensor readings</li>
                    <li>(Placeholder) preferred conditions</li>
                </ul>
                <p>Much of this information is retrieved from the database by the component, based on the plant's ID which was passed into the URL path parameters. This also allows plant profile pages to be generated dynamically for each of the plants a user has stored.</p>
                <p>The plant status icons are notable, as they are calculated based off of the last sensor readings taken to give a live assessment of how the plant is doing. They are currently calculated based on specific thresholds, but ideally in future this would be calculated based on API plant-specific data.</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/plant-profile.png"
                    width={200}
                    height={200}
                    layout="responsive"
                    alt={`Screenshot of the plant profile page`}
                />
            </div>
        </div>
        <div className={`${styles.pageSection} ${styles.rightHeavy}`}>
            <div className={styles.imageContainer}>
                <Image
                    src="/edit-plant.jpg"
                    width={200}
                    height={200}
                    layout="responsive"
                    alt={`Screenshot of the plant profile page`}
                />
            </div>
            <div>
                <h4>Add / Edit Plant</h4>
                <p>The pages to add a plant and edit a plant are very similar, and both provide a form for a user to fill out.</p>
                <p>The page to add a new plant uses a component called AddPlantRecord, and allows a user to store a new plant on the website. The Plant Species field and the Hub Location field both are text input fields, however they provide suggestions that filter as the user types. The Soil Moisture Sensor field is a simple dropdown, and allows the user to pick from the sensors that are currently stored in the system.</p>
                <p>On the other hand, the page to edit a plant uses the EditPlantRecord component, and allows a user to change the currently stored details for an existing plant. The form automatically populates itself with plant details from the database, but allows the user to change any field. They may press the submit changes button to save their new data to the database. Alternatively, the edit plant form also provides a button to delete the plant, which will remove it from the database and redirect the user to the homepage.</p>
                <p>Because MongoDB can't directly store image files, the photo upload field converts the uploaded file into a base64 string format first. This string can then be stored in the database.</p>
            </div>
        </div>
        <h3>Backend</h3>
        <p>The backend consists of a server, built using Express and Node.js, and a MongoDB database. The server handles all requests between the website, database, microcontroller and API to transfer data across to each segment.</p>
        <h4>Server</h4>
        <p>The server is a RESTful API that handles HTTP requests at specific endpoints. It is structured around these four main endpoints:</p>
        <ul>
            <li>/plant - handles interaction between the website and the database. Typically used for:
                <ul>
                    <li>Retrieving a user's plant details</li>
                    <li>Creating new records for newly added plants</li>
                    <li>Deleting one of the user's plant records</li>
                    <li>Updating a plant record with changes</li>
                </ul>
            </li>
            <li>/species - handles interaction between the frontend and the database. Typically used for:
                <ul>
                    <li>Retrieving plant species details for plant types stored in the system</li>
                </ul>
            </li>
            <li>/api - handles interaction between the frontend and the plant API. Typically used for:
                <ul>
                    <li>Getting an image of a plant when the user did not upload one</li>
                </ul>
            </li>
            <li>/hub - Handles interaction between the microcontroller and the database, and between the frontend and the database. Typically used for:
                <ul>
                    <li>Storing light and soil moisture sensor readings</li>
                    <li>Retrieving hub details for a user's microcontroller hub</li>
                    <li>Retrieving a plant's light and soil moisture data</li>
                </ul>
            </li>
        </ul>
        <h4>Database</h4>
        <p>The database uses MongoDB to store information regarding a user's plants and hubs. It is structured using the following tables:</p>
        <ul>
            <li>Plant Table - holds plant details such as its controller, species, photo and which soil moisture sensor it uses</li>
            <li>Species Table - holds names of plant species the system can recognise</li>
            <li>Controller Table - holds microcontroller details such as location</li>
            <li>Light Readings / Soil Moisture Readings Tables - holds data recorded by light or soil moisture sensors, such as level and timestamp</li>
        </ul>
        <p>The structure of the database is also highlighted in the UML diagram below.</p>
        <div className={styles.imageContainer}>
            <Image
                src="/database-uml.png"
                width={200}
                height={200}
                layout="responsive"
                alt="UML of the database"
            />
        </div>
        <p>Below is a screenshot displaying the database structure on the MongoDB website, along with some sample plant records.</p>
        <div className={`${styles.imageContainer} ${styles.mongodbImage}`}>
            <Image
                src="/mongodb-database.png"
                width={200}
                height={200}
                layout="responsive"
                alt="Screenshot of the MongoDB database"
            />
        </div>
        <p>The light_readings and soil_moisture_readings tables are set up to be time-series collections, and automatically delete records after a certain amount of time has passed. This is due to the large volume of sensor readings being stored, but only recent readings being used.</p>
        <h3>Microcontroller</h3>
        <p>The microcontroller used is an Adafruit HUZZAH32 ESP32 Feather Board. It is connected to two capacitive soil moisture sensors, which can be inserted into soil to give soil moisture readings. It is also connected to one photoresistor, which can be measured to find light levels.</p>
        <p>Below is a circuit diagram of the microcontroller system.</p>
        <div className={styles.imageContainer}>
            <Image
                src="/circuit-diagram.png"
                width={200}
                height={200}
                layout="responsive"
                alt="Circuit diagram of the microcontroller system"
            />
        </div>
        <p>The microcontroller uses Wi-Fi to interact with the server. After taking readings at regular intervals, it stores these readings in JSON format, then sends HTTP POST requests to the server. The server handles these requests by processing the data and storing it in the database.</p>
        <p>Below is an image of the microcontroller system.</p>
        <div className={styles.imageContainer}>
            <Image
                src="/hub.jpg"
                width={200}
                height={200}
                layout="responsive"
                alt="Photo of the microcontroller system"
            />
        </div>
        <h3>API</h3>
        <p>The API used for plant data was <a href="https://perenual.com/" target="_blank">Perenual</a>, which provides information on plants, including things like names, images, and importantly sunlight and watering preferences. I had planned to use the API for preference data so that the light and soil moisture readings taken by the microcontroller could be compared against what each plant actually needs. However, I did not have time to implement this. Instead, the API is currently used for retrieving a plant's picture when the user does not upload one of their own.</p>
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