import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiDocker, SiVercel, SiLinux, SiInsomnia, SiDotnet } from "react-icons/si";
import { DiAws } from "react-icons/di";

function Toolstack() {
  // Define a color map for your icons
  const iconColors = {
    linux: "#FFFFFF", // Change Linux color to white
    vscode: "#007ACC", // Visual Studio Code
    postman: "#FF6C37", // Postman
    vercel: "#FFFFFF", // Change Vercel color to white
    docker: "#2496ED", // Docker
    insomnia: "#5854F0", // Insomnia
    aws: "#FF9900", // AWS
    dotnet: "#512BD4" // .NET color
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: iconColors.linux }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: iconColors.vscode }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: iconColors.postman }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel style={{ color: iconColors.vercel }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ color: iconColors.docker }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia style={{ color: iconColors.insomnia }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws style={{ color: iconColors.aws }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet style={{ color: iconColors.dotnet }} />
      </Col>
    </Row>
  );
}

export default Toolstack;
