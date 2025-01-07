import React from 'react'
import RootLayout from './layout/RootLayout'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    )
  )

  return (
    <RouterProvider router= {router} />
  )
}

export default App