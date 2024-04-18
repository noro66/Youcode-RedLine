import './MyServices.scss'
import {Link} from "react-router-dom";

const MyServices = (props) => {
return (
    <div className={'myServices'}>
        <div className="container">
            <div className="title">
                <h1>Services</h1>
                <Link to="/add">
                    <button>Add New Service</button>
                </Link>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img className={'img'} src="/images/icons8-decision-64.png" alt=""/>
                    </td>
                    <td>Service 1</td>
                    <td>88</td>
                    <td>78</td>
                    <td>
                        <button>
                            <img className={'delete'} src="/images/icons8-delete-48%20(1).png" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img className={'img'} src="/images/icons8-decision-64.png" alt=""/>
                    </td>
                    <td>Service 1</td>
                    <td>88</td>
                    <td>78</td>
                    <td>
                        <button>
                            <img className={'delete'} src="/images/icons8-delete-48%20(1).png" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img className={'img'} src="/images/icons8-decision-64.png" alt=""/>
                    </td>
                    <td>Service 1</td>
                    <td>88</td>
                    <td>78</td>
                    <td>
                        <button>
                            <img className={'delete'} src="/images/icons8-delete-48%20(1).png" alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img className={'img'} src="/images/icons8-decision-64.png" alt=""/>
                    </td>
                    <td>Service 1</td>
                    <td>88</td>
                    <td>78</td>
                    <td>
                        <button>
                            <img className={'delete'} src="/images/icons8-delete-48%20(1).png" alt=""/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
};

export default MyServices;