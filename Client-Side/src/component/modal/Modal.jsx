import React, {useRef} from "react";
import "./Modal.scss";
import {useMutation} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useNavigate} from "react-router-dom";

function Modal({ setOpenModal, serviceId }) {

    const  navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: (order) => {
            return customAxios.post("order", order);
        },
        onSuccess:()=>{
            navigate('/orders');
        }
    });
    const {dateRef} = useRef(null);
    const date = dateRef.current.value;
    function handelOrder() {
        if (serviceId && date) {
            mutation.mutate({
                'service_id': serviceId,
                'order_date': date,
                'payment_intent': 'Not working for now'
            })
        }else{
            console.log('error');
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
                    <form >
                        <input useRef={dateRef} type="date"/>
                    </form>
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
                    <button onClick={handelOrder}>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;