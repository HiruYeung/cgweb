import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import About from "./About";
import Blog from "./Blog";
import Illustration from "./Illustration";
import Contact from "./Contact";
import CodeProject from "./CodeProject";
import "./App.css";
import Home from "./Home";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

