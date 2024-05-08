import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Create from "./utils/Create.jsx";
import Project from "./utils/create/Project.jsx";
import SOP from "./utils/create/SOP.jsx";
import Task from "./utils/create/Task.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
    children: [
      {
        path: "/create/sop",
        element: <SOP />,
      },
      {
        path: "/create/task",
        element: <Task />,
      },
      {
        path: "/create/project",
        element: <Project />,
      },
    ],
  },
]);
