import { Col } from "react-bootstrap";
import { Tilt } from "react-tilt";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
     <Tilt options={{ max: 20, speed: 450 }}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </Tilt>
    </Col>
  )
}

export default ProjectCard;