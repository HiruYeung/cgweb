
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./About";
import Blog from "./Blog";
import Illustration from "./Illustration";
import Contact from "./Contact";
import CodeProject from "./CodeProject";
import "./App.css";
import Home from "./Home";
import React, { useState, useEffect } from 'react';

function App() {
  const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

  const handleOrientationChange = (event) => {
    setIsPortrait(event.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(orientation: portrait)");
    mediaQueryList.addEventListener('change', handleOrientationChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}


const router = createBrowserRouter([
  {
    path: "/cgweb",
    element: <Root />,
    children: [
      { path: "Home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "blog/:id?", element: <Blog /> },
      { path: "Illustration", element: <Illustration /> },
      { path: "CodeProject", element: <CodeProject /> },
    ],
  },
]);



export default App;

