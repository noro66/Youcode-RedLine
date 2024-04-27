import './Add.scss';
import { useForm } from 'react-hook-form';
import { useQuery } from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";

const Add = () => {
    const { isPending, isLoading, error, data: categories, refetch } = useQuery({ queryKey: ['categories'],
        queryFn: () => customAxios.get('home').then(res => res.data.categories) });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className={'add'}>
            <div className="container">
                <h1>Add New Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="sections">
                        <div className="left">
                            <label htmlFor="title">Title</label>
                            <input type="text" {...register("title", { required: 'Title is required' })} placeholder={'e.g., I will provide a good drilling service'} />
                            {errors.title && <p>{errors.title.message}</p>}

                            <label htmlFor="category">Category</label>
                            <select name="cats" id="cats" {...register("category", { required: 'Category is required' })}>
                                <option value="">Select Category</option>
                                {isPending ? "Loading..." : error ? "Error" :
                                    categories?.map((cat) => <option key={cat?.id} value={cat?.id}>{cat?.title}</option>)
                                }
                            </select>
                            {errors.category && <p>{errors.category.message}</p>}

                            <label htmlFor="coverImage">Cover Image</label>
                            <input type="file" id="coverImage" name="coverImage" {...register("coverImage", { required: 'cover Image is required' })} />

                            <label htmlFor="serviceImages">Upload Images</label>
                            <input type="file" id="serviceImages" multiple name="serviceImages" {...register("serviceImages",  { required: 'at least one image is required' })} />

                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" {...register("desc", { required: 'Description is required' })} placeholder='Brief description to introduce your service to Clients' cols="30" rows="16"></textarea>
                            {errors.desc && <p>{errors.desc.message}</p>}

                            <button type="submit">Create</button>
                        </div>
                        <div className="right">
                            <label htmlFor="serviceTitle">Service Title</label>
                            <input type="text" id="serviceTitle" name="serviceTitle" {...register("serviceTitle", { required: 'Service title is required' })} placeholder="Service Title e.g., 250 meter drilling" />
                            {errors.serviceTitle && <p>{errors.serviceTitle.message}</p>}

                            <label htmlFor="shortDescription">Short Description</label>
                            <textarea name="shortDescription" id="shortDescription" {...register("shortDescription")} placeholder='Short description of your service' cols="30" rows="10"></textarea>

                            <label htmlFor="deliveryTime">Delivery Time (e.g., 3 days)</label>
                            <input type="number" min={1} {...register("deliveryTime")} />

                            <label htmlFor="revisionNumber">Revision Number</label>
                            <input type="number" min={1} {...register("revisionNumber")} />

                            <label htmlFor="features">Add Features</label>
                            {Array.from({ length: 5 }, (_, index) => (
                                <input key={index} {...register(`features[${index}]`)} type="text" placeholder="Feature" />
                            ))}

                            <label htmlFor="price">Price</label>
                            <input type="number" min={1} {...register("price", { required: 'Price is required and must be greater than 0' })} />
                            {errors.price && <p>{errors.price.message}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Add;
