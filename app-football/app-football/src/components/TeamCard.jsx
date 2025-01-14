import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom"; // Import Link from React Router
import Heart from "react-animated-heart";

const TeamCard = ({ team, onFavoriteToggle }) => {
  const [isClick, setClick] = useState(false);

  const handleFavoriteClick = () => {
    setClick(!isClick);
    onFavoriteToggle(team.id);
  };
  
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
            <div className = "favorite-button">
              
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default TeamCard;
