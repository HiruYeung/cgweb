import Kmb from './images/Kmb1.jpeg'
import Todo from './images/ToDo.jpeg'
import './CodeProject.css'


const CodeProject = () => {
  return (
  <div className="About" style={{ gap: '0'}}>
        <div style={{ gap: '0'}}>
            <br></br>
            <img src={Kmb} />
            <br></br>
            <a  href="https://hiruyeung.github.io/KmbApi/">https://hiruyeung.github.io/KmbApi/</a>
            <br></br>
            <br></br>
            <br></br>
            <img src={Todo} />
            <a  href="https://hiruyeung.github.io/TdoList/">https://hiruyeung.github.io/TdoList/</a>
            <br></br>
        </div>
   
    </div>
  )
};

export default CodeProject;