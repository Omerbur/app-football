import React from 'react'
import RootLayout from './layout/RootLayout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFound from './components/NotFound'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import TeamsLayout from './layout/TeamsLayout'
import Teams from './pages/Teams'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<RootLayout />} >
        <Route index element={<Home />} />
         
        <Route path='favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />

        <Route path = 'teams' element={<TeamsLayout/>}>
          <Route index element={<Teams/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router= {router} />
  )
}

export default App