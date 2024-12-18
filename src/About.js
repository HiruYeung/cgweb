import './About.css';
import IMG_888 from  './imageA/IMG_888.jpeg';
import ScrollableImageContainer from "./components/ScrollableImageContainer";

const About = () => {
  return (
  <div className="About">
    <div>
        <ScrollableImageContainer/>
          <p>
            Ehiru
            (Yeung Sui Sum)<br />
            此網頁由本人寫出 React + Next.js
          </p>
          <p>
            2002年3月8日 香港<br />
            Programmer & CG Illustrator
          </p>
          <div className='P'>
            8年電腦繪圖經驗 13歲開始使用Sai作畫<br />
            中學時期參加各種創天同人展販賣作品<br />
            現今活躍於接委託<br />
            跟商界 個別人士合作建立Project<br />
            例如遊戲設計 宣傳圖等
        </div>
        <div >
          <p>
            使用軟件為 PhotoShop, Clip Studio Paint, 
          </p>
          <p>
            Instagram: art.ehiru
            {/* 聯絡請郵件:angelyeung238@gmail.com */}
          </p>
            <p>
              <img src={IMG_888} className='IMG_888'/>
            </p>
         
        </div>
        </div>
      

        

    </div>
  )
};

export default About;
