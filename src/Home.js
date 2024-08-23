
import Game from  "./Gamepage/game";
import './Home.css';
import Ween3 from './imageHome/home3.jpg';
import Ween6h from './imageHome/home2.jpg'
import Ween12h from './imageHome/home1.jpg';



const Home = () => {
  return (
    <>
    <Game />
    <div className="Home" style={{ gap: '0', position: 'absolute'}}>
      <img src={Ween3} className='Ween3'/>
      <img src={Ween6h} className='Ween6h'/>
      <img src={Ween12h} className='Ween12h'/>
    </div>
    </>
  )
};

export default Home;