import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    
    const nav = useNavigate();
  return (
    <div className = 'notfound'>
        <h2>404 | Page not found</h2>
        <br/>
        <div className = 'notfoundbutton'>
            <button onClick={() => nav('/')}>Go to Home Page</button>
        </div>
    </div>
  )
}

export default NotFound