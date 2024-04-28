import Review from "../review/Review.jsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import './reviews.scss'
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import data from "bootstrap/js/src/dom/data.js";
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
            setCanReview(false);
        }
    });
    const [canReview, setCanReview] = useState(false);

    useEffect(() => {
        customAxios.get(`userCanReview/${service.id}` ).then(res => {
            setCanReview(res.data.can);
            queryClient.invalidateQueries(["service", id]);
        })
    }, [service]);

    const handleSubmit = (e) => {
        e.preventDefault();
       const service_id = service.id;
        const description = e.target[0].value;
        const star = e.target[1].value;
        mutation.mutate({service_id , description, star });
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
                            valArr.map(val => (
                                <option key={val} value={val}>{val}</option>
                            ))
                        }
                    </select>
                    <button>Send</button>
                </form>
            </div>}
        </div>
    )
}