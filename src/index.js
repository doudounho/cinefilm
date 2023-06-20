import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from "./component/movieDetails/detail";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router =createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorelement: <ErrorPage/>,
  },
  {
    path:"detail",
    element: <Detail/>,
    
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


