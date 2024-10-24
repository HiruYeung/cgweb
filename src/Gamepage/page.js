import React, { useState, useRef } from 'react';
import { Typography, Modal, Box, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Logoimg from './images/Logoimg.jpg';
import Play from './giphy-11.gif'; // 确保路径正确
import Blue1 from './images/Blue1.png';
import Blue2 from './images/Blue2.png';
import BGM from './Ultimate_Design.mp3';
import PixiPlayground from './PixiPlayground'; // 确保路径正确
import "./Css.css"

const Page = () => {
  const [gameOpen, setGameOpen] = useState(false);
  const bgmRef = useRef(null);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div className='scroll-thumb2' style={{ display: 'flex', gap: '0', position: 'absolute',}}>YeungSuiSum's Mini Web Game</div>
        <img src={Logoimg} className="logo" alt="Logo" style={{ display: 'flex', gap: '0', width: '100%'}}/>
        <div className='Plays' style={{ display: 'flex', gap: '0',}}>
          <img src={Blue1} className="Blue1" style={{ display: 'flex', gap: '0', width:'27%'}}/>
          <img onClick={() => setGameOpen(true)} src={Play} className="Play"style={{ display: 'flex', gap: '0', width: '44.7%'}}/>
          <img src={Blue2} className="Blue2" style={{ display: 'flex', gap: '0', width:'28.43%'}}/>
        </div>
        
        <Modal keepMounted open={gameOpen} onClose={() => setGameOpen(false)}>
          <Box
            sx={{
              width: '80%', // 可以根据需要调整宽度
              maxWidth: '600px', // 最大宽度
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', // 居中
            }}
          >
            <IconButton aria-label="close" onClick={() => setGameOpen(false)} sx={{ alignSelf: 'flex-end', color: 'white', top: 0, right: 280 }}>
              <Close onClick={() => {
              console.log(bgmRef);
              bgmRef.current.pause();
            }}/>
            </IconButton>
            <button onClick={() => {
              console.log(bgmRef);
              bgmRef.current.play();
            }}>
              <PixiPlayground />
            </button>
            <audio ref={bgmRef} src={BGM} />
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Page;


