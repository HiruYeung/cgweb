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




const Home = () => {
  
  return (
    <div>
  
                <>
                {/* <Header />
                <Outlet /> */}
                <Game />
                <div className="Home" style={{ gap: '0', position: 'absolute'}}>
                  <img src={Ween3} className='Ween3'/>
                  <img src={Ween6h} className='Ween6h'/>
                  <img src={Ween12h} className='Ween12h'/>
                </div>
                <Box
                    marginTop="56rem"
                    // marginBottom="3rem"
                    sx={{
                      backgroundImage: `url(${G0})`,
                      // backgroundPositionX: "20rem",
                      // backgroundSize: 'cover',
                      backgroundPositionX: "center",
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height:"28rem"
            
                   
                    
                    }}
                  >
                      <Typography
                        variant="h2"
                        fontSize="3rem"
                        fontFamily="GeorgiaRobotoSlab"
                        textAlign="center"
                        marginBottom="1.4rem"
                        sx={{
                          filter: "blur(0.5px)",
                          color: "white"
            
                        }}
                      >
                        Game Introduction
            
                            <Typography
                            variant="body1"
                            component="p"
                            fontSize="1.6rem"
                            fontFamily="GeorgiaRobotoSlab"
                            textAlign="center"
                            sx={{
                              filter: "blur(0.5px)",
                              color: "white"
                
                            }}
                          >
                            The Annual Halloween at Nathan Road in Mong Kok.
                            <br />
                            Help the protagonist, who is rushing home after work.
                            <br />
                            Avoid the cat ghosts and get home safely!
                          </Typography>
                      </Typography>
                  
            
                </Box>
                <Box
                    paddingBottom="6rem"
                    sx={{
                      backgroundImage: `url(${Light})`,
                      height:"170rem"
                 
                    }}
                  >
                    <Box display="flex" gap="1rem" margin="0 2rem">
                      <img
                        src={Head1}
                        width={440}
                        height={200}
                        style={{ minWidth: 0}}
                      />
                      <img
                        src={Head2}
                        alt="game-name-logo"
                        width={440}
                        height={200}
                        style={{ minWidth: 0 }}
                      />
                      <img
                        src={Head3}
                        alt="game-name-logo"
                        width={440}
                        height={200}
                        style={{ minWidth: 0 }}
                      />
                    </Box>
                    <Typography
                      variant="h2"
                      fontFamily="GeorgiaRobotoSlab"
                      fontSize="3rem"
                      textAlign="center"
                      marginTop="8rem"
                      marginBottom="2.2rem"
                      sx={{ filter: "blur(0.2px)",
                        color: "white",
                       }}
                    >
                      Gameplay
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      fontFamily="GeorgiaRobotoSlab"
                      fontSize="1.6rem"
                      textAlign="center"
                      sx={{ filter: "blur(0.2px)",
                        color: "white",
                       }}
                    >
                      Renaiween JFSD11 is a single-player Timed Runner game.
                      <br />
                      Players need to control the character to avoid Cat Ghosts and touch
                      Holy Cats.
                      <br />
                      In the end, you will get a round score.
                      <br />
                      Challenge Renaiween every day!
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="center"
                      margin="0 2rem"
                      marginTop="6rem"
                      gap="3rem"
                    >
                      <img
                          src={G1}
                          alt="game-name-logo"
                          width={500}
                          height={350}
                          unoptimized
                        />
                        <Typography
                          variant="body1"
                          component="p"
                          fontSize="1.5rem"
                          textAlign="center"
                          sx={{ filter: "blur(0.2px)",
                            color: "white",
                           }}
                        >
                          Cat Ghost
                          <br />
                          Lose health and -20 points
                        </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      margin="0 2rem"
                      marginTop="6rem"
                      gap="3rem"
                    >
                      <img
                          src={G2}
                          alt="game-name-logo"
                          width={500}
                          height={350}
                          unoptimized
                        />
                        <Typography
                          variant="body1"
                          component="p"
                          fontSize="1.5rem"
                          textAlign="center"
                          sx={{ filter: "blur(0.2px)",
                            color: "white",
                           }}
                        >
                          Cat Ghost
                          <br />
                          Lose health and -20 points
                        </Typography>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2rem"
                      marginTop="6rem"
                    >
                      <img
                        src={G4}
                        alt="game-name-logo"
                        width={750}
                        height={390}
                        unoptimized
                      />
                      <Typography
                        variant="body1"
                        component="p"
                        fontSize="1.5rem"
                        textAlign="center"
                        sx={{ filter: "blur(0.2px)",
                          color: "white",
                         }}
                      >
                        Up/Down Keys
                        <br />
                        Press the arrow keys on screen to decide the movement direction
                      </Typography>
                    </Box>
                    <br />
                    <Typography
                        variant="h2"
                        fontFamily="GeorgiaRobotoSlab"
                        fontSize="3rem"
                        textAlign="center"
                        marginBottom="1rem"
                        sx={{ filter: "blur(0.2px)",
                          color: "white",
                         }}
                      >
                        Game Screen
                      </Typography>
                      <img
                        src={G5}
                        alt="game-name-logo"
                        width={750}
                        height={236}
                        unoptimized
                      />
                      <br></br>
                      <img
                        src={G6}
                        alt="game-name-logo"
                        width={750}
                        height={236}
                        unoptimized
                      />
                    
            
            
                </Box>
            
                    {/* <Typography
                      variant="h2"
                      fontSize="3rem"
                      fontFamily="GeorgiaRobotoSlab"
                      textAlign="center"
                      marginBottom="1.4rem"
                      sx={{
                        filter: "blur(0.5px)",
                      }}
                    >
                      Game Introduction
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      fontSize="1.6rem"
                      fontFamily="GeorgiaRobotoSlab"
                      textAlign="center"
                    >
                      The Annual Halloween at Nathan Road in Mong Kok.
                      <br />
                      Help the protagonist, who is rushing home after work.
                      <br />
                      Avoid the cat ghosts and get home safely!
                    </Typography>
                  </Box>
                  <Box
                    paddingBottom="6rem"
                    sx={{
                      backgroundImage: 'url("/images/Lighth00.png")',
                      backgroundSize: "cover",
                    }}
                  >
                    <Box display="flex" gap="1rem" margin="0 2rem">
                      <Image
                        src="/images/Head1.jpeg"
                        alt="game-name-logo"
                        width={440}
                        height={200}
                        style={{ minWidth: 0 }}
                      />
                      <Image
                        src="/images/Head2.jpeg"
                        alt="game-name-logo"
                        width={440}
                        height={200}
                        style={{ minWidth: 0 }}
                      />
                      <Image
                        src="/images/Head3.jpeg"
                        alt="game-name-logo"
                        width={440}
                        height={200}
                        style={{ minWidth: 0 }}
                      />
                    </Box>
                    <Typography
                      variant="h2"
                      fontFamily="GeorgiaRobotoSlab"
                      fontSize="3rem"
                      textAlign="center"
                      marginTop="8rem"
                      marginBottom="2.2rem"
                      sx={{ filter: "blur(0.2px)" }}
                    >
                      Gameplay
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      fontFamily="GeorgiaRobotoSlab"
                      fontSize="1.6rem"
                      textAlign="center"
                    >
                      Renaiween JFSD11 is a single-player Timed Runner game.
                      <br />
                      Players need to control the character to avoid Cat Ghosts and touch
                      Holy Cats.
                      <br />
                      In the end, you will get a round score.
                      <br />
                      Challenge Renaiween every day!
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="center"
                      margin="0 2rem"
                      marginTop="6rem"
                      gap="3rem"
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="strench"
                        gap="2rem"
                      >
                        <Image
                          src="/images/giphy.gif"
                          alt="game-name-logo"
                          width={500}
                          height={350}
                          unoptimized
                        />
                        <Typography
                          variant="body1"
                          component="p"
                          fontSize="1.5rem"
                          textAlign="center"
                        >
                          Cat Ghost
                          <br />
                          Lose health and -20 points
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="strench"
                        gap="2rem"
                      >
                        <Image
                          src="/images/giphy3.gif"
                          alt="game-name-logo"
                          width={500}
                          height={350}
                          unoptimized
                        />
                        <Typography
                          variant="body1"
                          component="p"
                          fontSize="1.5rem"
                          textAlign="center"
                        >
                          Holy Cat
                          <br />+ 20 points
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="2rem"
                      marginTop="6rem"
                    >
                      <Image
                        src="/images/giphy4.gif"
                        alt="game-name-logo"
                        width={750}
                        height={390}
                        unoptimized
                      />
                      <Typography
                        variant="body1"
                        component="p"
                        fontSize="1.5rem"
                        textAlign="center"
                      >
                        Up/Down Keys
                        <br />
                        Press the arrow keys on screen to decide the movement direction
                      </Typography>
                    </Box>
                    <Stack
                      margin="auto"
                      marginTop="8.5rem"
                      spacing={4}
                      width="fit-content"
                      useFlexGap
                    >
                      <Typography
                        variant="h2"
                        fontFamily="GeorgiaRobotoSlab"
                        fontSize="3rem"
                        textAlign="center"
                        marginBottom="1rem"
                        sx={{ filter: "blur(0.2px)" }}
                      >
                        Game Screen
                      </Typography>
                      <Image
                        src="/images/giphy-5.gif"
                        alt="game-name-logo"
                        width={750}
                        height={236}
                        unoptimized
                      />
                      <Image
                        src="/images/giphy-6.gif"
                        alt="game-name-logo"
                        width={750}
                        height={236}
                        unoptimized
                      />
                    </Stack> */}
                
                
                </>
    
    </div>
  )
};


export default Home;