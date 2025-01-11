import React, { useEffect, useState } from "react";
import { fetchTeams } from "../utils/apiService"; // API call to fetch all teams
import TeamCard from "../components/TeamCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BATCH_SIZE = 10; // Number of teams to display per batch

const Teams = () => {
  const [allTeams, setAllTeams] = useState([]); // Store all fetched teams
  const [displayedTeams, setDisplayedTeams] = useState([]); // Teams currently displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the next batch
  const [loading, setLoading] = useState(false); // Loading state
  const [hasMore, setHasMore] = useState(true); // Check if more teams are available

  // Fetch all teams on mount
  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      try {
        const teams = await fetchTeams(); // Fetch all teams
        setAllTeams(teams); // Save all teams
        setDisplayedTeams(teams.slice(0, BATCH_SIZE)); // Display the first 10 teams
        setCurrentIndex(BATCH_SIZE); // Set the next batch start index
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  // Scroll event handler
  const handleScroll = () => {
    console.log("Height", document.documentElement.scrollHeight);
    console.log("Top:", document.documentElement.scrollTop);
    console.log("Window:", window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100 // Trigger slightly before reaching the bottom
    ) {
      loadMoreTeams();
    }
  };

  // Load more teams
  const loadMoreTeams = () => {
    if (loading || !hasMore) return; // Prevent duplicate calls while loading or when no more teams

    const nextBatch = allTeams.slice(currentIndex, currentIndex + BATCH_SIZE); // Get the next 10 teams
    if (nextBatch.length === 0) {
      setHasMore(false); // No more teams to load
      return;
    }

    setDisplayedTeams((prevTeams) => [...prevTeams, ...nextBatch]); // Append to displayed teams
    setCurrentIndex((prevIndex) => prevIndex + BATCH_SIZE); // Update the batch index
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on unmount
  }, [loading, currentIndex, hasMore]); // Re-run when loading, index, or hasMore changes

  return (
    <Container className="mt-5">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {displayedTeams.map((teamObj, index) => (
          <TeamCard key={teamObj.team.id || index} team={teamObj.team} />
        ))}
      </Row>
      {loading && <div className="text-center">Loading...</div>}
      {!loading && !hasMore && <div className="text-center">No more teams to load.</div>}
    </Container>
  );
};

export default Teams;
