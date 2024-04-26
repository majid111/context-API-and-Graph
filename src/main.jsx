import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx';
import Graph from './Components/Graph/Graph.jsx';
import Signup from './Components/SignUp/Signup.jsx';
import Comment from './Components/Comment/Comment.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<App></App>,
      },
      {
        path: "/graph",
        element:<Graph></Graph>,
      },
      {
        path: "/signUp",
        element:<Signup></Signup>,
      },
      {
        path: "/comment",
        element:<Comment></Comment>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
