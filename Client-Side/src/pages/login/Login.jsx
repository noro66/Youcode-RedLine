import {Link, useNavigate} from "react-router-dom";
// import {useStateContext} from "../Context/ContextProvider.jsx";
import {useForm} from "react-hook-form";
import customAxios from "../../../CustomAxios.js";
import './Login.scss';
import {useEffect, useState} from "react";
import CustomAxios from "../../../CustomAxios.js";
import {useStateContext} from "../../context/ContextProvider.jsx";
import {jwtDecode} from "jwt-decode";

export  default function Login (key, value) {
    const navigate = useNavigate();
    const {setUser, setToken, user, token} = useStateContext();
    const [error, setError] = useState(null);

    function onsubmit(data) {
        CustomAxios.post("auth/login", data).then(({data}) =>  {
            let buffuser  = jwtDecode(data.token)?.user;
            setUser(buffuser);
            setToken(data.token);
            navigate("/");
        }).catch(err => setError(err.response.data));
    }
    const {register, handleSubmit,formState: {errors : formErrors}} = useForm();

    return (

        <div className='login-signup-form animated fadeInDown'>
            <div className='form'>
                <h1 className={'title'}>Login To Your Account</h1>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder={'Email'} {...register('email', {required: true})} />
                    <label htmlFor="">password</label>
                    <input type="password" placeholder="Password" {...register('password', {required: true})}/>
                    <button type="submit" className={'btn btn-block'}>Login</button>
                    <p className={'message'}>
                        Not Registered ? <Link to={'/register'}>Create an account !</Link>
                    </p>
                    {error && JSON.stringify(error)}
                </form>
            </div>
        </div>
    );
}