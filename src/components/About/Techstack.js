import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiCplusplus
} from "react-icons/si";

function Techstack() {
  // Define a color map for your icons
  const iconColors = {
    javascript: "#F7E02D",
    nodejs: "#8CC84B",
    react: "#61DAFB",
    tailwindcss: "#38BDF8",
    flask: "#FFFFFF", // Change flask color to white
    mongodb: "#4DB33D",
    cplusplus: "#00599C",
    nextjs: "#FFFFFF", // Change nextjs color to white
    git: "#F05032",
    firebase: "#FFCA28",
    python: "#306998",
    java: "#F7DF1E",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: iconColors.javascript }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: iconColors.nodejs }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: iconColors.react }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss style={{ color: iconColors.tailwindcss }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask style={{ color: iconColors.flask }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{ color: iconColors.mongodb }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus style={{ color: iconColors.cplusplus }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs style={{ color: iconColors.nextjs }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: iconColors.git }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{ color: iconColors.firebase }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: iconColors.python }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: iconColors.java }} />
      </Col>
    </Row>
  );
}

export default Techstack;
