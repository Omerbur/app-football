import React, { useEffect, useState } from "react";
import { fetchTeams } from "../utils/apiService"; 
import TeamCard from "../components/TeamCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BATCH_SIZE = 10; 

const Teams = () => {
  const [allTeams, setAllTeams] = useState([]); 
  const [displayedTeams, setDisplayedTeams] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 

  
  useEffect(() => {
    const loadTeams = async () => {
      setLoading(true);
      try {
        const teams = await fetchTeams(); 
        setAllTeams(teams); 
        setDisplayedTeams(teams.slice(0, BATCH_SIZE)); 
        setCurrentIndex(BATCH_SIZE); 
      } catch (error) {
        console.error("Error fetching teams:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  
  const handleScroll = () => {
    console.log("Height", document.documentElement.scrollHeight);
    console.log("Top:", document.documentElement.scrollTop);
    console.log("Window:", window.innerHeight);
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100 
    ) {
      loadMoreTeams();
    }
  };

  
  const loadMoreTeams = () => {
    if (loading || !hasMore) return; 

    const nextBatch = allTeams.slice(currentIndex, currentIndex + BATCH_SIZE); 
    if (nextBatch.length === 0) {
      setHasMore(false); 
      return;
    }

    setDisplayedTeams((prevTeams) => [...prevTeams, ...nextBatch]); 
    setCurrentIndex((prevIndex) => prevIndex + BATCH_SIZE); 
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, [loading, currentIndex, hasMore]); 

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
