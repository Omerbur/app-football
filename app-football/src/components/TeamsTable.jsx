import React from "react";
import Table from "react-bootstrap/Table";

const TeamsTable = ({ teamsData }) => {
  if (!teamsData || teamsData.length === 0) {
    return <div>No teams available to display.</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Team Name</th>
          <th>Code</th>
          <th>Country</th>
          <th>Founded</th>
        </tr>
      </thead>
      <tbody>
        {teamsData.map((teamObj, index) => (
          <tr key={teamObj.team.id}>
            <td>{index + 1}</td>
            <td>
              <img
                src={teamObj.team.logo}
                alt={`${teamObj.team.name} logo`}
                style={{
                  width: "50px",
                  height: "50px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </td>
            <td>{teamObj.team.name}</td>
            <td>{teamObj.team.code || "N/A"}</td>
            <td>{teamObj.team.country}</td>
            <td>{teamObj.team.founded || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TeamsTable;
