import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Addservice from "../../Pages/Addservice/Addservice";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import Servicedetails from "../../Pages/Services/Servicedetails";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import Privateroute from "../Privateroute/Privateroute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Privateroute><Services></Services></Privateroute>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/serviceDetails/:id',
                element: <Servicedetails></Servicedetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Privateroute><Reviews></Reviews></Privateroute>
            },
            {
                path: '/addservice',
                element: <Privateroute><Addservice></Addservice></Privateroute>
            }
        ]
    }
])