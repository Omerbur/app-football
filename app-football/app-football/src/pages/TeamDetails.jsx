import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTeams } from "../utils/apiService";
import Heart from "react-animated-heart";

const TeamDetails = () => {
  // we extrac the id of the team using params.
  // in teamdata we store all the data of the team and venue
  const { id } = useParams(); 
  const [teamData, setTeamData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadTeamDetails = async () => {
      setLoading(true);
      try {
        const teams = await fetchTeams(); 
        const selectedTeam = teams.find(
          (teamObj) => teamObj.team.id.toString() === id
        ); 
        setTeamData(selectedTeam || null); 

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(
          favorites.some((fav) => fav.id === selectedTeam?.team.id)
        );
      } catch (err) {
        console.error("Error fetching team details:", err);
        setError("Failed to load team details.");
      } finally {
        setLoading(false);
      }
    };

    loadTeamDetails();
  }, [id]);

  
  useEffect(() => {
    const handleStorageChange = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setIsFavorite(
        favorites.some((fav) => fav.id === teamData?.team?.id)
      );
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [teamData]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      
      updatedFavorites = favorites.filter((fav) => fav.id !== teamData.team.id);
    } else {
      
      updatedFavorites = [...favorites, teamData.team];
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) return <div className="team-details-container">Loading...</div>;
  if (error) return <div className="team-details-container">Error: {error}</div>;
  if (!teamData) return <div className="team-details-container">Team not found.</div>;

  const { team, venue } = teamData;

  return (
    <div className="team-details-container">
      <h1 className="team-details-title">{team.name}</h1>
      <div className="team-logo-container">
        <img
          src={team.logo}
          alt={`${team.name} logo`}
          className="team-logo"
          
        />
      </div>
      <div className="favorite-button">
        <Heart isClick={isFavorite} onClick={handleFavoriteClick} />
      </div>
      <p className="team-details-info">
        <strong>Country:</strong> {team.country}
      </p>
      <p className="team-details-info">
        <strong>Founded:</strong> {team.founded || "N/A"}
      </p>
      <p className="team-details-info">
        <strong>Code:</strong> {team.code || "N/A"}
      </p>
      <p className="team-details-info">
        <strong>Venue:</strong> {venue ? venue.name : "N/A"}
      </p>
      <p className="team-details-info">
        <strong>Venue Location:</strong> {venue ? `${venue.address}, ${venue.city}` : "N/A"}
      </p>
      <p className="team-details-info">
        <strong>Venue Capacity:</strong> {venue ? venue.capacity : "N/A"}
      </p>
      <div className="team-venue-image-container">
        {venue?.image && (
          <img
            src={venue.image}
            alt={`${venue.name} venue`}
        
          />
        )}
      </div>
    </div>
  );
};

export default TeamDetails;
