import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Layout from "./pages/Layout/Layout";
import Courses from "./pages/Courses/Courses";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "Courses",
          element: <Courses />,
        },
        {
          path: "Blog",
          element: <Blog />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;