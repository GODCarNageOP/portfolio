import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import weatherApp from "../assets/img/weatherapp.png";
import youtubeApp from "../assets/img/youtubeapp.png";
import earth from "../assets/img/earth.png";
import cryptoTracker from "../assets/img/cryptotracker.png";
import chatgpt from "../assets/img/chatgpt.png";
import docs from "../assets/img/docs.png";
import crypto from "../assets/img/crypto app.png";
import admin from "../assets/img/admin.png";
import cloudcore from "../assets/img/cloudcore.png";
import design from "../assets/img/design.png";
import fuel from "../assets/img/fuel.png";
import iphone from "../assets/img/iphone.png";
import tictac from "../assets/img/tictac.png";
import tutor from "../assets/img/tutor.png";
import elex from "../assets/img/electronics.png"

const Projects = () => {
  const projects1 = [
    {
      title: "Electronics Department",
      description: "MERN Stack, Material UI, Tailwind CSS",
      imgUrl: elex,
    },
    {
      title: "Cloudcore",
      description: "Web 3, Three JS, Blockchain, Ethereum, Tailwind CSS",
      imgUrl: cloudcore,
    },
    {
      title: "Tutoring App",
      description: "Full-Stack, Sassy CSS",
      imgUrl: tutor,
    },
    {
      title: "3D Jersey Designer",
      description: "AI, Three JS, Full-Stack, Tailwind CSS",
      imgUrl: crypto,
    },
    {
      title: "Crypto Trading App",
      description: "Web 3, Blockchain, Ethereum, Tailwind CSS",
      imgUrl: design,
    },
    {
      title: "Admin Dashboard",
      description: "Full-Stack, Material UI, Sassy CSS",
      imgUrl: admin,
    },
  ];

  const projects2 = [
    {
      title: "Youtube 2.0",
      description: "API, Full-Stack, Tailwind CSS",
      imgUrl: youtubeApp,
    },
    {
      title: "Real Time Document Editor",
      description: "Mern-Stack",
      imgUrl: docs,
    },
    {
      title: "Crypto App",
      description: "API, Full-Stack",
      imgUrl: cryptoTracker,
    },
     {
      title: "Chatgpt 2.0",
      description: "AI, Full-Stack, Tailwind CSS",
      imgUrl: chatgpt,
    },
    {
      title: "Apple App",
      description: "Three JS",
      imgUrl: iphone,
    },
    {
      title: "TicTacToe Game",
      description: "Javascript",
      imgUrl: tictac,
    },
  ];

  const projects3 = [
    {
      title: "3D Solar System",
      description: "Three JS",
      imgUrl: earth,
    },
    {
      title: "Online Fuel Deivery App",
      description: "Full-Stack",
      imgUrl: fuel,
    },
     {
      title: "Weather App",
      description: "API, Full-Stack",
      imgUrl: weatherApp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Let our advance worrying become advance thinking and planning.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
