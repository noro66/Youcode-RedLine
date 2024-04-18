import './Orders.scss'
import {Link} from "react-router-dom";

const Orders = (props) => {
    const currentUser = {
        id:1,
        username: "john doe",
        isSeller: true
    }
return (
    <div className={'myOrders'}>
        <div className="container">
            <div className="title">
                <h1>Orders</h1>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>{currentUser?.isSeller ? 'Client' : 'Service Provider'}</th>
                    <th>Contact</th>
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
                            <img className={'delete'} src="/images/icons8-message-48.png" alt=""/>
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
                        <img className={'delete'} src="/images/icons8-message-48.png" alt=""/>

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
                        <img className={'delete'} src="/images/icons8-message-48.png" alt=""/>

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
                        <img className={'delete'} src="/images/icons8-message-48.png" alt=""/>

                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
};

export default Orders;