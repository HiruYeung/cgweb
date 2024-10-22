import { Outlet } from "react-router";
import Header from "./Header";
import Home from "./Home"
import ScrollableImageContainer from "./components/ScrollableImageContainer";


const Root = () => {
  return (
    <div>
      <div>
        <Header/>
        <Outlet />

      </div>
      {/* <div style={{  height:"100px" }}>
        <Outlet />
      </div> */}
      <div style={{  display:"flex", justifyContent:"center", marginTop:"10rem" }}>
      
      </div>
    </div>
  );
};

export default Root;
