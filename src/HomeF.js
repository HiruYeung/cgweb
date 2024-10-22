"use client";

import Game from  "./Gamepage/game";
import './Home.css';
import Ween3 from './imageHome/home3.jpg';
import Ween6h from './imageHome/home2.jpg'
import Ween12h from './imageHome/home1.jpg';
import { Outlet } from "react-router";
import Header from "./Header";
import { Typography, Modal, Box, IconButton } from '@mui/material';
import Gif from "./imagesp/giphy.gif";
import Light from "./imagesp/Lighth00.png";
import Head1 from "./imagesp/Head1.jpeg";
import Head2 from "./imagesp/Head2.jpeg";
import Head3 from "./imagesp/Head3.jpeg";
import G1 from "./imagesp/giphy1.gif";
import G2 from "./imagesp/giphy2.gif";
import G4 from "./imagesp/giphy4.gif";
import G5 from "./imagesp/giphy-5.gif";
import G6 from "./imagesp/giphy-6.gif";
import G0 from "./imagesp/giphy0.png";
import { useLocation } from 'react-router-dom';
import Home from "./Home"




const HomeF = () => {
  
  return (
    <div>
  
      
                {/* <Header />
                <Outlet /> */}
                <Game />
                {/* <Home /> */}

        
                

               
    
    </div>
  )
};

// const SpecialComponent = () => {
//     return <div>This is a special component only for HomeF!</div>;
//   };

// const router = createBrowserRouter([
//     {
//       path: "/cgweb",
//       element: <HomeF />,
//       children: [
//         { path: "Home", element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "blog/:id?", element: <Blog /> },
//         { path: "Illustration", element: <Illustration /> },
//         { path: "CodeProject", element: <CodeProject /> },
//       ],
//     },
// ]);



export default HomeF;