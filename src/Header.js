import { Link } from "react-router-dom";
import './Style.css';
import ScrollableImageContainer from "./components/ScrollableImageContainer";

const Header = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center", // Centers the entire header horizontally
        alignItems: "center",     // Centers the content vertically
        padding: "12px",
        fontFamily: "Times New Roman",
        gap:"0"
        
        
        
      }}
      className="Header"
    >
          {/* <div style={{ 
            margin: "0px 20px",
        
            
          }}

            >
        
            
            
          </div> */}

          <div className="div"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // gap: "20px",   // Adds space between the links
              paddingTop: "12px",
              fontFamily: "Times New Roman",
            }}
          >
          <div >
            <div className="links-container">
                <Link to="/cgweb/Home" className="link">Home</Link>
                <Link to="/cgweb/about" className="link">About</Link>
                <Link to="/cgweb/blog" className="link">Blog</Link>
                <Link to="/cgweb/Illustration" className="link">Illustration</Link>
                
                {/* <ScrollableImageContainer/> */}
              </div>
            </div>
          </div>
    </div>
  );
};

export default Header;

