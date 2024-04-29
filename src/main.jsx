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
import Form from './Components/Form/Form.jsx';
import Form1 from './Components/Form1/Form1.jsx';
import DaisyUiForm from './Components/DaisyUiForm/DaisyUiForm.jsx';
import Comments from './Components/Comments/Comments.jsx';
import Photos from './Components/Photos/Photos.jsx';
import Posts from './Components/Posts/Posts.jsx';
import InputManage from './Components/InputManage/InputManage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
      {
        path: "/graph",
        element: <Graph></Graph>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
      {
        path: "/comment",
        element: <Comment></Comment>,
      },
      {
        path: "/form",
        element: <Form></Form>,
        children: [
          {
            path: "/form/",
            element: <Form1></Form1>,
          },
          {
            path: "/form/DaisyUi",
            element: <DaisyUiForm></DaisyUiForm>,
          },
          {
            path: "/form/comments",
            element: <Comments></Comments>,
          },
          {
            path: "/form/photos",
            element: <Photos></Photos>,
          },
          {
            path: "/form/posts",
            element: <Posts></Posts>,
          },
          {
            path: "/form/More",
            element: <div>Coming Soon....</div>,
          },
        ]
      },
      {
        path: "/inputManage",
        element: <InputManage></InputManage>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
