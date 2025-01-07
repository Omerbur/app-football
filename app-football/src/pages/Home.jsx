import React from 'react'
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
           <button onClick={() => nav('favorites')}>Favorites</button>
         </div>
        
         <div className='teamslistbutton'>
            <button onClick={() => nav('teams')}>Teams List</button>
         </div>
        </div>
        
        
        <Outlet /> 
    </div>
    
  )
}

export default Home