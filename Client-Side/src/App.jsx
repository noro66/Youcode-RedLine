import Navbar from "./component/navbar/Navbar.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Navigate, useNavigate
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
import Service from "./pages/service/Service.jsx";
import Login from "./pages/login/Login.jsx";
import {useStateContext} from "./context/ContextProvider.jsx";
import Register from "./pages/register/Rejister.jsx";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import customAxios from "../CustomAxios.js";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Users from "./component/users/Users.jsx";
import Categories from "./component/categories/Categories.jsx";
import ServicesApprove from "./component/approveSrervices/ServicesApprove.jsx";

function App() {
    const queryClient = new QueryClient();


    //
    const Layout = ()=> {
        // const {token} = useStateContext();
        // const navigate = useNavigate();
        // if (!token){
        //     return navigate('/login');
        // }
        return (
            <QueryClientProvider client={queryClient}>
            <div className="App">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
            </QueryClientProvider>
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
                    path: '/service/:id',
                    element: <Service/>
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
                },
                {
                    path: '/login',
                    element: <Login/>
                },
                {
                    path: '/register',
                    element: <Register />
                },
            ]
        },
        {
            path: "/dashboard",
            element: <Dashboard/>,
            children:[
                {
                    path: '/dashboard/users',
                    element: <Users/>
                },
                {
                    path: '/dashboard/categories',
                    element: <Categories />
                },
                {
                    path: '/dashboard/approve',
                    element: <ServicesApprove/>
                }
            ]
        }
    ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
