import './Add.scss';
import { useForm } from 'react-hook-form';
import {useMutation, useQuery} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import MultiSelect from "../../component/multiselect/MultiSelect.jsx";

const Add = () => {
    const { isPending, isLoading, error, data: categories, refetch } = useQuery({ queryKey: ['categories'],
        queryFn: () => customAxios.get('home').then(res => res.data.categories) });
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [features, setFeatures] = useState([]);

    const   onSubmit = async data => {
        try {
            const formData = new FormData();
            data.cover_image = Array.isArray(data.cover_image) ? data.cover_image[0] : data.cover_image;
            const imagesArray = Array.from(data.images);

            imagesArray.forEach(image => {
                formData.append("images[]", image);
            });


            if (Array.isArray(features)) {
                features.forEach((feature, index) => {
                    formData.append(`features[${index}]`, feature.trim());
                });
            }


            formData.append('cover_image', data.cover_image[0]);
            Object.keys(data).forEach((key) => {
                if (key !== "images" && key !== "cover_image") {
                    formData.append(key, data[key]);
                }
            });

            await customAxios.post("services", formData);
            navigate("/myservices");
        }catch (err){
            console.log(err?.response?.data);
        }
    };

    return (
        <div className={'add'}>
            <div className="container">
                <h1>Add New Service</h1>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <div className="sections">
                        <div className="left">
                            <label htmlFor="title">Title</label>
                            <input  className={ errors.title && "border-red"} type="text" {...register("title", { required: 'Title is required' })} placeholder={'e.g., I will provide a good drilling service'} />
                            {errors.title && <p>{errors.title.message}</p>}

                            <label htmlFor="category">Category</label>
                            <select name="cats" id="cats" {...register("service_category_id", { required: 'Category is required' })}>
                                <option value="">Select Category</option>
                                {isPending ? "Loading..." : error ? "Error" :
                                    categories?.map((cat) => <option key={cat?.id} value={cat?.id}>{cat?.title}</option>)
                                }
                            </select>
                            {errors.category && <p>{errors.category.message}</p>}

                            <label htmlFor="coverImage">Cover Image</label>
                            <input  className={ errors.coverImage && "border-red"} type="file" accept="image/jpeg, image/png, image/bmp, image/svg+xml" id="cover_image" name="cover_image" {...register("cover_image", { required: 'cover Image is required' })} />
                            {errors.coverImage && <p>{errors.coverImage.message}</p>}

                            <label htmlFor="serviceImages">Upload Images</label>
                            <input  className={ errors.images && "border-red"} type="file" id="images" multiple accept="image/jpeg, image/png, image/bmp, image/svg+xml" {...register("images[]",  { required: 'At least one image is required' })} />
                            {errors.images && <p>{errors.images.message}</p>}

                            <label htmlFor="desc">Description</label>
                            <textarea name="desc" id="desc" {...register("desc", { required: 'Description is required' })} placeholder='Brief description to introduce your service to Clients' cols="30" rows="16"></textarea>
                            {errors.desc && <p>{errors.desc.message}</p>}

                            <button type="submit">Create</button>
                        </div>
                        <div className="right">
                            <label htmlFor="serviceTitle">Service Title</label>
                            <input  className={ errors.short_title && "border-red"} type="text" id="short_title" name="short_title" {...register("short_title", { required: 'Service title is required' })} placeholder="Service Title e.g., 250 meter drilling" />
                            {errors.short_title && <p>{errors.short_title.message}</p>}

                            <label htmlFor="short_desc">Short Description</label>
                            <textarea name="short_desc" id="short_desc" {...register("short_desc")} placeholder='Short description of your service' cols="30" rows="10"></textarea>

                            <label htmlFor="delivery_time">Delivery Time (e.g., 3 days)</label>
                            <input  className={ errors.delivery_time && "border-red"} type="number" min={1} {...register("delivery_time", { required: 'Delivery Time is required' })} />
                            {errors.delivery_time && <p>{errors.delivery_time.message}</p>}

                            <label htmlFor="revision_time">Revision Time</label>
                            <input  className={ errors.revision_time && "border-red"} type="number" min={1} {...register("revision_time",{ required: 'Revision Time is required' })} />
                            {errors.revision_time && <p>{errors.revision_time.message}</p>}

                            {/*<label htmlFor="features">Add Features</label>*/}
                            {/*{Array.from({ length: 5 }, (_, index) => (*/}
                            {/*    <input  key={index} {...register(`features[${index}]`)} type="text" placeholder="Feature" />*/}
                            {/*))}*/}

                            <MultiSelect features={features}  setFeatures={ setFeatures} />

                            <label htmlFor="price">Price</label>
                            <input  className={ errors.price && "border-red"} type="number" min={1} {...register("price", { required: 'Price is required and must be greater than 0' })} />
                            {errors.price && <p>{errors.price.message}</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Add;
