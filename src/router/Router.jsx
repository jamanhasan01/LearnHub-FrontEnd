import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import BookedServies from "../pages/BookedServies";
import ServiceToDo from "../pages/ServiceToDo";
import PrivetRouter from "./PrivetRouter";
import ServiceDetails from "../pages/ServiceDetails";
import UpdateService from "../pages/UpdateService";
import ServiceToDoUpdate from "../components/ServiceToDoUpdate";

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
                element:<PrivetRouter><AddService></AddService></PrivetRouter>
            },
            {
                path:'/updateservice/:id',
                element:<PrivetRouter><UpdateService></UpdateService></PrivetRouter>
            },
            {
                path:'/servicetodoupdate/:id',
                element:<PrivetRouter><ServiceToDoUpdate></ServiceToDoUpdate></PrivetRouter>
            },
            {
                path:'/servicedetails/:id',
                element:<PrivetRouter><ServiceDetails></ServiceDetails></PrivetRouter>
            },
          

            {
                path:'/manageservice',
                element:<PrivetRouter> <ManageService></ManageService></PrivetRouter>
            },
            {
                path:'/bookedservices',
                element:<PrivetRouter><BookedServies></BookedServies></PrivetRouter>
            },
            {
                path:'/servicetodo',
                element:<PrivetRouter><ServiceToDo></ServiceToDo></PrivetRouter> 
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