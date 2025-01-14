import React from 'react';
import { Outlet } from 'react-router-dom';

const TeamsLayout = () => {
  return (
    <div className = "teamslayout" > {}
      <h1>Teams List</h1>
      <Outlet />
    </div>
  );
};

export default TeamsLayout;

