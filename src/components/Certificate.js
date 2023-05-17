import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import csi from "../assets/img/csi.png"
import intern from "../assets/img/internship.png"
import hackathon from "../assets/img/certificate hackathon.png"

const Certificate = () => {

    const certificates = [
        {
          title: "Arsenic Esports",
          description: "Full Stack Web Development Intern",
          imgUrl: intern
        },
        {
          title: "Hack OWASP",
          description: "36 Hours Hackathon",
          imgUrl: hackathon
        },
        {
          title: "CSI TCET",
          description: "Inter College Project Competition",
          imgUrl: csi
        },
      ];

    return ( 
        <section className="certificate" id="certificates">
            <Container>
                <Row>
                    <Col>
                    <h2>Certifications</h2>
                    <p>I completed these certifications in order to expand my knowledge and enhance my skills.</p>
                    <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                            {
                                certificates.map((certificate, index) => {
                                    return (
                                        <CertificateCard
                                        key={index}
                                        {...certificate}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><p></p></Tab.Pane>
                    <Tab.Pane eventKey="third"><p></p></Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
}
 
export default Certificate;