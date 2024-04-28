import React, {useState} from "react";
import { useForm } from "react-hook-form";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import customAxios from "../../../CustomAxios.js";

function Register() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [imageData, setImageData] = useState('');
    const [type, setType] = useState(false);




    const onSubmit = async (data) => {
        try {
            data.type = type ? 'seller' : 'client';
            data.isSeller = type ? 1 : 0 ;
            const formData = new FormData();
            formData.append('img', imageData);
            Object.keys(data).forEach(key => {
                formData.append(key, data[key]);
            });

            console.log(formData);

            await customAxios.post("/auth/register", formData);

            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="register">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="left">
                    <h1>Create a new account</h1>
                    <label htmlFor="username">Username</label>
                    <input {...register("username", { required: true, min: 8, max: 35 })} type="text" placeholder="johndoe" />
                    {errors.username && <span>This field is required</span>}
                    <label htmlFor="email">Email</label>
                    <input  {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/i })} type="email" placeholder="email" />
                    {errors.email && <span>This field is required</span>}
                    <label htmlFor="password">Password</label>
                    <input {...register("password", { required: true, min: 8, max:255 })} type="password" />
                    {errors.password && <span>This field is required</span>}
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input {...register("password_confirmation", { required: true })} type="password" />
                    {errors.password && <span>This field is required</span>}
                    <label htmlFor="img">Profile Image</label>
                    <input name="image" type="file" onChange={(e)=>{setImageData(e.target.files[0])}} />
                    {errors.password && <span>This field is required</span>}
                    <label htmlFor="city">City</label>
                    <input {...register("city", { required: true })} type="text" placeholder="Casablanca" />
                    {errors.city && <span>This field is required</span>}
                    <button type="submit">Register</button>
                </div>
                <div className="right">
                    <h1>You want to become a server seller ?</h1>
                    <div className="toggle">
                        <label htmlFor="">Activate the seller account</label>
                        <label className="switch">
                            <input type="checkbox" {...register("isSeller")} onChange={() => setType(!type)}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="phone">Phone Number</label>
                    <input {...register("phone", {
                        required: type,
                        pattern: /^\+?[0-9\s-]+$/
                    })} type="text" placeholder="+212 634 567 89"/>
                    <label htmlFor="desc">Description</label>
                    <textarea {...register("description",{min: 45,max: 255 , required: type,})} placeholder="A short description of yourself" cols="30"
                              rows="10"></textarea>
                </div>
            </form>
        </div>
    );
}

export default Register;
