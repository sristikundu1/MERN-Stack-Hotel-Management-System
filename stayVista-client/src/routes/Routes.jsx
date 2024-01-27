import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AddRoom from "../pages/DashBoard/Host/AddRoom";
import MyListings from "../pages/DashBoard/Host/MyListings";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                
            },
            {
                path:"/room/:id",
                element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({params}) => getRoom(params.id)
            },
           
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    },
    {
        path:"/dashboard",
        element:<DashBoardLayout></DashBoardLayout>,
        children:[
            {
                path:"add-room",
                element:<AddRoom></AddRoom>
            },
            {
                path:"my-listings",
                element:<MyListings></MyListings>
            }
        ]
    }
])

export default routes;