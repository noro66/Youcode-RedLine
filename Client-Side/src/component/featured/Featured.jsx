import './Featured.scss'
import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
const Featured = () => {

    const navigate = useNavigate();
    const [input, setInput] = useState(null);
    const handelClick = () => {
        navigate(`services/?search=${input}`);
    }
  return (
      <div className="featured">
          <div className="container">
            <div className="left">
                <h1>Find the Best <i>Drilling</i> Service For You</h1>
                <div className="search">
                        <div className="searchInput">
                        <img src="./images/searchicon.png" alt=""/>
                        <input type="text" onChange={(e)=>setInput(e.target.value)}  placeholder="Search..." />
                         </div>
                    <button disabled={input === null}  onClick={handelClick}>Search</button>
                </div>
                <div className="popular">
                    <span>Popular : </span>
                    <button>Test pop</button>
                    <button>Test pop</button>
                    <button>Test pop</button>
                    <button>Test pop</button>
                </div>
            </div>
            <div className="right">
                <img src="./images/homeImage.svg" alt=""/> 
            </div>
          </div>
      </div>
  )
}

export default Featured