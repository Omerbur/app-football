import React from 'react'
import Button from 'react-bootstrap/Button'

import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const nav = useNavigate();
  return (
    
    <div>
        <h1>Home</h1>
        <p>Welcome to the Football Teams Info App</p>
        <p>You can go to view all the teams, or check out your favorites</p>
        <div className='homebuttons'>
          <div className='favoritebutton'>
           <Button variant="primary" size="lg" onClick={() => nav('favorites')}>Favorites</Button>
         </div>
        
         <div className='teamslistbutton'>
            <Button variant="primary" size="lg" onClick={() => nav('teams')}>Teams List</Button>
      
         </div>
        </div>
      
        <Outlet /> 
    </div>
    
  )
}

export default Home