import React from 'react'
import RootLayout from './layout/RootLayout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import TeamsLayout from './layout/TeamsLayout'
import Teams from './pages/Teams'
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamDetails from './pages/TeamDetails'


const App = () => {

  // Created a browser router with all the routes defined.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<RootLayout />} >
        <Route index element={<Home />} />
         
        <Route path='favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />

        <Route path = 'teams' element={<TeamsLayout/>}>
          <Route index element={<Teams/>}/>
        </Route>
        {/*added the :id to make sure each team had its own route with a details page*/}
        <Route path="/teams/:id" element={<TeamDetails />} />

      </Route>
    )
  )

  return (
    // returning the router so that it is reachable troughout the app 
    <RouterProvider router= {router} />
  )
}

export default App