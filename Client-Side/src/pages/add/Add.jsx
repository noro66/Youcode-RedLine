import './Add.scss'
import {useReducer, useState} from "react";
import {INITIAL_STATE, serviceReducer} from "../../reducers/serviceReducer.js";
import {useQuery} from "@tanstack/react-query";
import customAxios from "../../../CustomAxios.js";

const Add = () => {
    const { isPending, isLoading, error, data: categories, refetch} = useQuery({ queryKey: ['categories'],
        queryFn: ()=> customAxios.get('home').then(res => res.data.categories) });

    const  [singleFile, setSingleFile] = useState(undefined);
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    const  [state, dispatch] = useReducer(serviceReducer ,INITIAL_STATE)
return (
    <div className={'add'}>
        <div className="container">
            <h1>Add New Service</h1>
            <div className="sections">
                <div className="left">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder={'e.g I will provide a good drilling service'}/>
                    <label htmlFor="">Category</label>
                    <select name="cats" id="cats">
                        <option selected={true} value="">Select Category </option>
                        {
                            isPending ? "loading..." : error ? "error" :
                                categories?.map((cat) => <option value={cat?.id}>{cat?.title}</option>
                                )
                        }
                    </select>
                    <label htmlFor="">Cover Image</label>
                    <input type="file" id="coverImage" name="coverImage"/>
                    <label htmlFor="">Upload Images</label>
                    <input type="file" id="serviceImages" multiple name="serviceImages"/>
                    <label htmlFor="">Description</label>
                    <textarea name="desc" id="" placeholder='Brief description to introduce  your service  to Clients' cols="30" rows="16"></textarea>
                    <button>Create</button>
                </div>
                <div className="right">
                    <label htmlFor="">Service Title</label>
                    <input type="text" id="serviceTitle" name="serviceTitle" placeholder="Service Title e.g 250 metter drilling"/>
                    <label htmlFor="">Short Description</label>
                    <textarea name="" id="" placeholder='Short description of your service' cols="30" rows="10"></textarea>
                    <label htmlFor="">Delivery Time (e.g 3 days)</label>
                    <input type="number"  min={1}/>
                    <label htmlFor="">Revision Number</label>
                    <input type="number"  min={1}/>
                    <label htmlFor="">Add Features</label>
                    <input type="text" placeholder='features ...'/>
                    <input type="text" placeholder='features ...' />
                    <input type="text" placeholder='features ...' />
                    <input type="text" placeholder='features ...' />
                    <input type="text" placeholder='features ...' />
                    <label htmlFor="">Price</label>
                    <input type="number" min={1}/>
                </div>
            </div>
        </div>
    </div>
)
};

export default Add;