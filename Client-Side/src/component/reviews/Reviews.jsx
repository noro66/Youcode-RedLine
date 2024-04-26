import Review from "../review/Review.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import './reviews.scss'
import {useParams} from "react-router-dom";
import {useRef} from "react";
export default function Reviews({reviews, queryClient, service_id}) {

    const {id} = useParams();
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({ service_id , description, star });
    };



    return (
        <div className="reviews">
            <h2>Reviews : </h2>
            {reviews?.length > 0 ? reviews.map((review, index) => (
                <Review item={review} key={index}/>
            )) : <p>there is no reviews for this service !!</p>}
            <div className="add">
                <h3>Add a review</h3>
                <form action="" className="addForm" onSubmit={handleSubmit}>
                    <input type="text" ref={descRef} placeholder="write your opinion"/>
                    <select ref={starRef} name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}