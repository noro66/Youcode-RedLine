
import './Messages.scss'
import {Link} from "react-router-dom";
const Messages = () => {

    const currentUser = {
        id:1,
        username: "john doe",
        isSeller: true
    }
    const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias amet assumenda doloremque error impedit magnam nam nemo quae recusandae reprehenderit, rerum tenetur vel voluptatem! Atque beatae explicabo optio. ';
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
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className={'active'}>
                    <td>John Doe</td>
                    <td><Link className={'link'} to={'/message/12'}> {message.substring(0, 100)}..</Link> </td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr className={'active'}>
                    <td>John Doe</td>
                    <td><Link className={'link'} to={'/message/12'}> {message.substring(0, 100)}..</Link> </td>
                    <td>1 day ago</td>
                    <td>
                        <button>Mark As Read</button>
                    </td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td><Link className={'link'} to={'/message/12'}> {message.substring(0, 100)}..</Link> </td>
                    <td>1 day ago</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td><Link className={'link'} to={'/message/12'}> {message.substring(0, 100)}..</Link> </td>
                    <td>1 day ago</td>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td><Link className={'link'} to={'/message/12'} > {message.substring(0, 100)}..</Link> </td>
                    <td>1 day ago</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
)
};

export default Messages;