import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bootstrap from "../assets/img/bootstrap.png";
import tailwindcss from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import vite from "../assets/img/vite.png";
import three from "../assets/img/three.png";
import express from "../assets/img/express.png";
import seo from "../assets/img/seo.png";
import eventmanagement from "../assets/img/eventmanagement.png";
import copywriting from "../assets/img/copywriting.png";
import twrp from "../assets/img/twrp.png";
import orangefox from "../assets/img/orangefox.png";
import contentcreation from "../assets/img/contentcreation.png";
import blockchain from "../assets/img/blockchain.png";
import solidity from "../assets/img/solidity2.png";
import dapps from "../assets/img/dapps.png";
import graphic from "../assets/img/graphic.png";
import firebase from "../assets/img/firebase.png";
import web from "../assets/img/web 3.png";
import reactNative from "../assets/img/react native.png";
import webDevelopment from "../assets/img/web development.png";
import hacker from "../assets/img/hacker.png";
import animator from "../assets/img/animator.png";
import mongodb from "../assets/img/mongodb.png";
import next from "../assets/img/next.png";
import scss from "../assets/img/scss.png";
import mui from "../assets/img/mui.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                These are some skills I have developed throughout my career.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={webDevelopment} alt="Img" />
                  <h5>Web Developer</h5>
                </div>

                <div className="item">
                  <img src={web} alt="Img" />
                  <h5>Web3 Developer</h5>
                </div>

                <div className="item">
                  <img src={dapps} alt="Img" />
                  <h5>Dapps Developer</h5>
                </div>

                <div className="item">
                  <img src={blockchain} alt="Img" />
                  <h5>Blockchain</h5>
                </div>
                
                <div className="item">
                  <img src={solidity} alt="Img" />
                  <h5>Solidity</h5>
                </div>

                <div className="item">
                  <img src={next} alt="Img" />
                  <h5>Next JS</h5>
                </div>

                <div className="item">
                  <img src={mongodb} alt="Img" />
                  <h5>Mongo DB</h5>
                </div>

                <div className="item">
                  <img src={express} alt="Img" />
                  <h5>Express JS</h5>
                </div>

                <div className="item">
                  <img src={react} alt="Img" />
                  <h5>React JS</h5>
                </div>

                <div className="item">
                  <img src={node} alt="Img" />
                  <h5>Node JS</h5>
                </div>

                <div className="item">
                  <img src={vite} alt="Img" />
                  <h5>Vite JS</h5>
                </div>

                <div className="item">
                  <img src={three} alt="Img" />
                  <h5>Three JS</h5>
                </div>

                <div className="item">
                  <img src={reactNative} alt="Img" />
                  <h5>React Native</h5>
                </div>

                <div className="item">
                  <img src={bootstrap} alt="Img" />
                  <h5>Bootstrap 5</h5>
                </div>

                <div className="item">
                  <img src={mui} alt="Img" />
                  <h5>Material UI</h5>
                </div>

                <div className="item">
                  <img src={tailwindcss} alt="Img" />
                  <h5>Tailwind CSS</h5>
                </div>

                <div className="item">
                  <img src={scss} alt="Img" />
                  <h5>Sassy CSS</h5>
                </div>

                <div className="item">
                  <img src={firebase} alt="Img" />
                  <h5>Firebase</h5>
                </div>

                <div className="item">
                  <img src={graphic} alt="Img" />
                  <h5>Graphic Designer</h5>
                </div>

                <div className="item">
                  <img src={animator} alt="Img" />
                  <h5>Visual Effects</h5>
                </div>

                <div className="item">
                  <img src={seo} alt="Img" />
                  <h5>Search Engine Optimization</h5>
                </div>

                <div className="item">
                  <img src={eventmanagement} alt="Img" />
                  <h5>Event Designer</h5>
                </div>

                <div className="item">
                  <img src={copywriting} alt="Img" />
                  <h5>Copywriter</h5>
                </div>

                <div className="item">
                  <img src={twrp} alt="Img" />
                  <h5>TWRP Recovery</h5>
                </div>

                <div className="item">
                  <img src={orangefox} alt="Img" />
                  <h5>OrangeFox Recovery</h5>
                </div>

                <div className="item">
                  <img src={hacker} alt="Img" />
                  <h5>Ethical Hacking</h5>
                </div>

                <div className="item">
                  <img src={contentcreation} alt="Img" />
                  <h5>Content Creator</h5>
                </div>

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
