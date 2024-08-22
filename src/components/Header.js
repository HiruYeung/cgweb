import { Link } from "react-router-dom";
import './Style.css';
import ScrollableImageContainer from "./ScrollableImageContainer";

const Header = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center", // Centers the entire header horizontally
        alignItems: "center",     // Centers the content vertically
        padding: "12px",
        fontFamily: "Times New Roman",
        
        
      }}
      className="div"
    >
      <div style={{ 
        margin: "0px 20px",
    
        
       }}

        >
    
        
        
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",   // Adds space between the links
          paddingTop: "12px",
          fontFamily: "Times New Roman",
        }}
      >
      <div style={{ marginRight: "50rem",}}>
        <Link to="/cgweb/Home" className="links">Home</Link>
        <Link to="/cgweb/about" className="link">About</Link>
      </div>
        <Link to="/cgweb/blog" className="link">Blog</Link>
        <Link to="/cgweb/Illustration" className="link">Illustration</Link>
        <Link to="/cgweb/CodeProject" className="link">CodeProject</Link>
        
        {/* <ScrollableImageContainer/> */}
      </div>
    </div>
  );
};

export default Header;

