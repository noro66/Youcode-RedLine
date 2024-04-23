import  './Navbar.scss'
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import CustomAxios from "../../../CustomAxios.js";
import {useStateContext} from "../../context/ContextProvider.jsx";
import customAxios from "../../../CustomAxios.js";

const Navbar = () =>{
    const {setToken, setUser,  user ,token} = useStateContext()

    function onLogout(e) {
        e.preventDefault();
        customAxios.post("auth/logout", {token: token}).then(() =>  {
            setToken(null);
            setUser(null);
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
        }).catch(r => console.log(r));
    }

const  [active, setActive] = useState(false);
const  [open, setOpen] = useState(false);
const {pathname} = useLocation();

    const categories = [
        'Oil Drilling',
        'Gas Drilling',
        'Water Well Drilling',
        'Geothermal Drilling',
        'Mining Drilling',
        'Directional Drilling',
        'Horizontal Drilling',
        'Vertical Drilling',
        'Core Drilling',
        'Rotary Drilling',
        'Hydraulic Fracturing',
    ];

const isActive = ()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
}
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    }, []);

// const user = user;
    return (
        <div className={(active || pathname !== '/') ? "navbar is-active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={'/'} className={'link'}>
                        <span className={'firstText'}>Drill</span>
                    </Link>
                    <span className={'secondText'}>.</span>
                </div>
                <div className="links">
                    <span>Drilling Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!user?.isSeller && <span>Became a Server</span>}
                    <Link to={'/register'} className={'link'}> <span>Sign in</span> </Link>
                    {!user  && <Link to={'/login'}>
                        <button>Join Us</button>
                    </Link>}
                    {user && <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="../../../public/images/profile.svg" alt=""/>
                        <span>{user.username}</span>
                        {open && <div className="options">
                            {
                                user.isSeller && (
                                    <>
                                       <Link className={'link'}  to={'/myservices'}> <span>Service</span> </Link>
                                       <Link className={'link'}  to={'/add'}> <span>Add New Service</span>< /Link>
                                    </>
                                )
                            }
                           <Link className={'link'}  to={'/orders'}>  <span>Orders</span> </Link>
                           <Link  className={'link'} to={'messages'} > <span>Messages</span> </Link>
                            <hr/>
                            <span onClick={onLogout}>Logout</span>
                        </div>}
                    </div>}
                </div>
            </div>
              {(active || pathname !== '/') &&  <>
                   <hr/>
                   <div className="menu">
                       {categories.map((category, index) => (
                           <Link key={index} className={'link'} to={'/'}>
                               <span>{category}</span>
                           </Link>
                       ))}
                   </div>
                  <hr/>
              </>
              }

        </div>
    )
}
export default Navbar;