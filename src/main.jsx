import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';

import Payment from './components/Payment/Payment.jsx';
import GuidesProfiles from './components/GuidesProfiles/GuidesProfiles.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
     {
      path:'/guide',
      element:<GuidesProfiles></GuidesProfiles>
     },
     {
      path:'/payment',
      element:<Payment></Payment>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
