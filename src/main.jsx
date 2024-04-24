import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Users from "./Pages/Users.jsx";
import AddUser from "./Pages/AddUser.jsx";
import UpdateUser from "./Pages/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/update-user/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
