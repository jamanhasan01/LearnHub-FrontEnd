import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Services from "../components/Services";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import BookedServies from "../pages/BookedServies";
import ServiceToDo from "../pages/ServiceToDo";

let router=createBrowserRouter([
    {
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/services",
                element:<Services></Services>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/manageservice',
                element:<ManageService></ManageService>
            },
            {
                path:'/bookedservices',
                element:<BookedServies></BookedServies>
            },
            {
                path:'/servicetodo',
                element:<ServiceToDo></ServiceToDo>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
        ]
    }
])

export default router