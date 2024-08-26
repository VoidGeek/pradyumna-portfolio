import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pradyCrop.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            I have a strong passion for programming and have acquired a solid understanding in this field. 
            <br />
            <br />I am proficient in 
            <i>
              <b className="purple"> Java, Python, JavaScript 💻</b>
            </i>
            <br />
            <br />
            My interests include developing innovative &nbsp;
            <i>
              <b className="purple">Web Technologies and Products 🌍</b> and
              exploring areas related to{" "}
              <b className="purple">Machine Learning 🤖.</b>
            </i>
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products with 
            <b className="purple"> Node.js</b> and
            <i>
              <b className="purple"> Modern JavaScript Libraries and Frameworks ⚛️</b>
            </i>
            &nbsp; like 
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>.
            <br />
            <br />
            Additionally, I am keen on working with 
            <b className="purple"> AWS ☁️</b> and
            <b className="purple"> .NET using C# 🔧</b>.
          </p>
        </Col>
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  </Row>
  <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/VoidGeek"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/pradyumna-p-010038231/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:pradyumna.p.6969@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiOutlineMail />
          </a>
        </li>
      </ul>
    </Col>
  </Row>
</Container>

    </Container>
  );
}
export default Home2;
