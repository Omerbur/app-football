import React from 'react';
import { Outlet } from 'react-router-dom';

const TeamsLayout = () => {
  return (
    <div style={{ paddingTop: "20px", marginTop: "80px" }}> {/* Match navbar height */}
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Teams List</h1>
      <Outlet />
    </div>
  );
};

export default TeamsLayout;

