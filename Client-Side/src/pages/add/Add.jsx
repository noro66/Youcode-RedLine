import './Add.scss'

const Add = (props) => {
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
                        <option value="">Select Category 0</option>
                        <option value="cati1">Category 01</option>
                        <option value="cati2">Category 02</option>
                        <option value="cate3">Category 03</option>
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