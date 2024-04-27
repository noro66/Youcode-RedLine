import  './Navbar.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import CustomAxios from "../../../CustomAxios.js";
import {useStateContext} from "../../context/ContextProvider.jsx";
import customAxios from "../../../CustomAxios.js";
import {imageFromat} from "../../utils/imgaes/ImageFormat.js";

const Navbar = () =>{
    const {setToken, setUser,  user ,token, categories} = useStateContext()
    const navigate = useNavigate();
    function onLogout(e) {
        e.preventDefault();
        customAxios.post("auth/logout", {token: token}).then(() =>  {
            setToken(null);
            setUser(null);
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            navigate('/');
        }).catch(r => console.log(r));
    }

const  [active, setActive] = useState(false);
const  [open, setOpen] = useState(false);
const {pathname} = useLocation();

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
                    <Link to={'/services'} className={'link'}><span>Services</span></Link>
                    {!user?.isSeller && <span>Became a SP</span>}
                    {!user  && <Link to={'/login'}>
                    <Link to={'/register'} className={'link'}> <span>Join Us</span> </Link>
                        <button>Sign in</button>
                    </Link>}
                    {user && <div className="user" onClick={()=>setOpen(!open)}>
                        <img src={imageFromat(user?.img)} alt=""/>
                        <span>{user.username}</span>
                        {open && <div className="options">
                            {
                                user.isSeller ? (
                                    <>
                                       <Link className={'link'}  to={'/myservices'}> <span>Service</span> </Link>
                                       <Link className={'link'}  to={'/add'}> <span>Add New Service</span>< /Link>
                                    </>
                                ) : ""
                            }
                           <Link className={'link'}  to={'/orders'}>  <span>Orders</span> </Link>
                           <Link  className={'link'} to={'messages'} > <span>Profile</span> </Link>
                            <hr/>
                            <span onClick={onLogout}>Logout</span>
                        </div>}
                    </div>}
                </div>
            </div>
              {(active || pathname !== '/') &&  <>
                   <hr/>
                   <div className="menu">
                       {categories && categories?.map((category, index) => (
                           <Link key={index} className={'link'} to={`services?category=${category?.id}`}>
                               <span>{category.title}</span>
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