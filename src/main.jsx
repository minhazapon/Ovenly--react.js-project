import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './raw css/Vanila.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import MenuMother from './menu file/MenuMother';
import Page from './page file/Page';
import Reservation from './Reservation';
import Gallery from './gallery file/Gallery';
import Contact from './contact file/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/menu",
        element: <MenuMother></MenuMother> ,
      },
      {
        path: "/page",
        element: <Page></Page> ,
      },
      {
        path: "/reservation",
        element:  <Reservation></Reservation> ,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery> ,
      },
      {
        path: "/contact",
        element: <Contact></Contact> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
