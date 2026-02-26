import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Allarticles from "./components/Allarticles/Allarticles";
import Lights from "./components/Lights/Lights";
import Portrait from "./components/Portrait/Portrait";
import Landscapes from "./components/Landscapes/Landscapes";
import Technologies from "./components/Technologies/Technologies";
import Equipment from "./components/Equipment/Equipment";
import Notfound from "./components/notfound/Notfound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },

        {
          path: "blog",
          element: <Blog />,
          children: [
            { index: true, element: <Allarticles /> },

            { path: "lights", element: <Lights /> },
            { path: "portrait", element: <Portrait /> },
            { path: "landscapes", element: <Landscapes /> },
            { path: "technologies", element: <Technologies /> },
            { path: "equipment", element: <Equipment /> },
               { path: "*", element: <Notfound /> },
          ],
        },

        { path: "about", element: <About /> },

        { path: "*", element: <Notfound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
