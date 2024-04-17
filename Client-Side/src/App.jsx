import Navbar from "./component/navbar/Navbar.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Footer from "./component/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Services from "./pages/services/Services.jsx";
import Orders from "./pages/orders/Orders.jsx";
import MyServices from "./pages/myServices/MyServices.jsx";
import Add from "./pages/add/Add.jsx";
import Message from "./pages/message/Message.jsx";
import Messages from "./pages/messages/Messages.jsx";
import './app.scss'

function App() {

    const Layout = ()=> {
        return (
            <div className="App">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        )

    }
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/services',
                    element: <Services/>
                },
                {
                    path: '/services/:serviceId',
                    element: <Services/>
                },
                {
                    path: '/orders',
                    element: <Orders/>
                },
                {
                    path: '/myservices',
                    element: <MyServices/>
                },
                {
                    path: '/add',
                    element: <Add/>
                },
                {
                    path: '/messages',
                    element: <Messages/>
                },
                {
                    path: '/message/:messageId',
                    element: <Message/>
                }
            ]
        },
    ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
