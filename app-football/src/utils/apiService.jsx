import {useEffect, useState} from 'react'

// leagues I need: 140 - LaLiga, 39 - Premier League, 61 - League 1, 78 - Bundesliga, 71 - Serie A, 383 - Ligat Ha'al


export const fetchTeams = async () => {
  const leagueIds = [140, 39,61,78,71,383];
  const API_KEY = "72699923082080ca779c68d505ab0f18";
  const API_HOST = "v3.football.api-sports.io";
  const allTeams = [];

  console.log(leagueIds);
  try {
    for (const leagueId of leagueIds) {
      const URL = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`;

      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      const data = await response.json();
      console.log(data.response);
      allTeams.push(...data.response); 
      console.log(allTeams);
    }

    return allTeams;
  } catch (error) {
    throw new Error("Failed to fetch teams: " + error.message);
  }
};



