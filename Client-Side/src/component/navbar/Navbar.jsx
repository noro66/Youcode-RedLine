import  './Navbar.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () =>{
const  [active, setActive] = useState(false);
const  [open, setOpen] = useState(false);
const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
}
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    }, []);

const currentUser = {
    id:1,
    username: "john doe",
    isSeller: true

}
    return (
        <div className={active ? "navbar is-active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <span className={'firstText'}>Drill</span>
                    <span className={'secondText'}>.</span>
                </div>
                <div className="links">
                    <span>Drilling Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>SignIn</span>
                    {!currentUser?.isSeller && <span>Became a Server</span>}
                    {!currentUser && <button>Join Us</button>}
                    {currentUser && <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="../../../public/images/profile.svg" alt=""/>
                        <span>{currentUser.username}</span>
                        {open && <div className="options">
                            {
                                currentUser.isSeller && (
                                    <>
                                        <span>Service</span>
                                        <span>Add New Service</span>
                                    </>
                                )
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>}
                    </div>}
                    {/*<Link to={'#'}>*/}
                    {/*    <span>Drilling Business</span>*/}
                    {/*</Link>*/}
                    {/*<Link to={'#'}><span>Explore</span></Link>*/}
                    {/*<Link to={'#'}><span>English</span></Link>*/}
                    {/*<Link to={'#'}> <span>SignIn</span></Link>*/}
                    {/*<Link to={'#'}><span>Join Us</span></Link>*/}

                </div>
            </div>
              {active &&  <>
                   <hr/>
                   <div className="menu">
                   <span>Test</span>
                   <span>Test1</span>
                   <span>Test2</span>
                   </div>
              </>
              }

        </div>
    )
}
export default Navbar;