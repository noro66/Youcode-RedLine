import React, {useRef, useState} from "react";
import "./Modal.scss";
import {useMutation} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useNavigate} from "react-router-dom";
import {useStateContext} from "../../context/ContextProvider.jsx";

function Modal({ setOpenModal, serviceId }) {

    const mutation = useMutation({
        mutationFn: (order) => {
            return customAxios.post("order", order);
        },
        onSuccess:()=>{
            navigate('/orders');
        }
    });
    const dateRef = useRef(null);
    const [error, setErro] = useState(false);
    function handelOrder() {
        const date = dateRef.current.value;
        const today = new Date();
        if (date !== '' && serviceId) {
            const inputDate = new Date(date);
            if (!(inputDate < today.setHours(0, 0, 0, 0))){
                mutation.mutate({
                    'service_id': serviceId,
                    'order_date': date,
                    'payment_intent': 'Not working for now'
                });
            }else {
                dateRef.current.style.border = "2px solid red";
                setErro(true);
            }
       }else {
           dateRef.current.style.border = "2px solid red";
           setErro(true);
       }
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                    <label htmlFor="">Casual a Service date : </label>
                    <input ref={dateRef} type="date"/>
                    {error && <p >Please Set a valid date</p>}
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button  onClick={handelOrder}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;