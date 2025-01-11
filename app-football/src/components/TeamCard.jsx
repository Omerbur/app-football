import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom"; // Import Link from React Router

const TeamCard = ({ team }) => {
  return (
    <Col>
      <Link to={`/teams/${team.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card className="text-center">
          <div className="image-container">
            <Card.Img
              variant="top"
              src={team.logo || "https://via.placeholder.com/150"}
              alt={`${team.name} logo`}
              className="team-logo"
            />
          </div>
          <Card.Body>
            <Card.Title>{team.name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default TeamCard;
