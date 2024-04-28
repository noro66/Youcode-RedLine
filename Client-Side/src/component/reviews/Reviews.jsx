import Review from "../review/Review.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import './reviews.scss'
import {useParams} from "react-router-dom";
import {useRef, useState} from "react";
export default function Reviews({reviews, queryClient, service}) {

    const {id} = useParams();
    const valArr = ["1", "2", "3", "4", "5"];
    const descRef = useRef(null);
    const starRef = useRef(1);
    const mutation = useMutation({
        mutationFn: (review) => {
            return customAxios.post("review", review);
        },
        onSuccess:()=>{
            queryClient.invalidateQueries(["service", id]);
            descRef.current.value = '';
            starRef.current.value = 1;
        }
    });
    const [canReview, setCanReview] = useState(false);
        console.log(service);
       if (typeof user !== 'undefined' && user !== null){
           service?.orders?.map((order) => {
               if (order?.client?.user?.id !== user?.id) {
                   setCanReview(true);
               }
           })
       }
    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({id , description, star });
    };



    return (
        <div className="reviews">
            <h2>Reviews : </h2>
            {reviews?.length > 0 ? reviews.map((review, index) => (
                <Review item={review} key={index}/>
            )) : <p>there is no reviews for this service !!</p>}
            { canReview && <div className="add">
                <h3>Add a review</h3>
                <form action="" className="addForm" onSubmit={handleSubmit}>
                    <input type="text" ref={descRef} placeholder="write your opinion"/>
                    <select ref={starRef} id="">
                        {
                            valArr.map((val, key) => (
                                <option key={key} value={val}>{val}</option>
                            ))
                        }
                    </select>
                    <button>Send</button>
                </form>
            </div>}
        </div>
    )
}