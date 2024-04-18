
import './Messages.scss'
const Messages = () => {

    const currentUser = {
        id:1,
        username: "john doe",
        isSeller: true
    }
return (
    <div className={'messages'}>
        <div className="container">
            <div className="title">
                <h1>Messages</h1>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Client</th>
                    <th>Last Message</th>
                    <th>Date</th>
                    <th>{currentUser?.isSeller ? 'Client' : 'Service Provider'}</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta doloremque perspiciatis
                        praesentium quo voluptatem.
                    </td>
                    <td>1 day ago</td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta doloremque perspiciatis
                        praesentium quo voluptatem.
                    </td>
                    <td>1 day ago</td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta doloremque perspiciatis
                        praesentium quo voluptatem.
                    </td>
                    <td>1 day ago</td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta doloremque perspiciatis
                        praesentium quo voluptatem.
                    </td>
                    <td>1 day ago</td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, dicta doloremque perspiciatis
                        praesentium quo voluptatem.
                    </td>
                    <td>1 day ago</td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
};

export default Messages;