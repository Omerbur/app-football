import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (teamId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== teamId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); 

    
    window.dispatchEvent(new Event("storage"));
  };

  if (favorites.length === 0) {
    return (
      <div className="no-favorite">
        <h1>No favorite teams yet.</h1>
      </div>
    );
  }

  return (
    <div className="favorite-teams-container">
      <h1>Your Favorite Teams</h1>
      <div className="favorite-list">
        <ul>
          {favorites.map((team) => (
            <li key={team.id}>
              <img
                src={team.logo}
                alt={`${team.name} logo`}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              {team.name}
              <div className="remove-favorite-button">
                <Button
                  size="sm"
                  onClick={() => removeFromFavorites(team.id)}
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorites;
