import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Components/Pages/Home'


function App() {

const myRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path='/' element={<LayoutOne/>}>
     <Route index element={<Home/>}/>
     </Route>
    </Route>
  )
)

  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
