import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tours from "../../Assets/Projects/Tours.png";
import greivance from "../../Assets/Projects/grievance.png";
import Kulkunda from "../../Assets/Projects/Kulkunda.png";
import Kali from "../../Assets/Projects/kali.png";
import Human from "../../Assets/Projects/Human.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kulkunda}
              isBlog={false}
              title="Kulkunda Temple Official website"
              description= "Enables devotees to engage in various sevas and other activities, enhancing their spiritual experience and involvement with the temple."
              ghLink="https://github.com/isecoder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greivance}
              isBlog={false}
              title="Secure Portal for Admins"
              description="The Secure Portal for Admins is a protected access area designed for administrators, offering a centralized and safe environment to manage system settings, oversee user activities, and handle critical operations."
              ghLink="https://github.com/VoidGeek/Admin-Portal-Client-React.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tours}
              isBlog={false}
              title="Blog Management System"
              description="The Blog Management System is built with PHP and MySQL, offering an easy-to-use interface for creating, editing, and managing blog posts, with PHP handling server-side tasks and MySQL for data storage."
              ghLink="https://github.com/VoidGeek/BlogPlus.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kali}
              isBlog={false}
              title="Yoga Pose Detection using ML"
              description="Yoga Pose Detection using ML leverages machine learning to accurately identify and analyze yoga poses for improved practice and feedback."
              ghLink="https://github.com/VoidGeek/mini-project-yoga.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Human}
              isBlog={false}
              title="Wearable EEG to Detect Seizures in Real Time"
              description="Deep learning Project to capture brain waves and predict seizures instantly preventing further damage to the patient."
              ghLink="https://github.com/VoidGeek/Seizure-Predict.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
