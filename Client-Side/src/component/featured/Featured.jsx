import './Featured.scss'
const Featured = () => {
  return (
      <div className="featured">
          <div className="container">
            <div className="left">
                <h1>Find the Best <i>Drilling</i> Service For You</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./images/searchicon.png" alt=""/>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button>Search</button>
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