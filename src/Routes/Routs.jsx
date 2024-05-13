import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import SingelRoom from "../Pages/SingelRoom/SingelRoom";
import Rooms from "../Pages/Rooms/Rooms";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/rooms",
                element: <Rooms />,
                loader: ()=> fetch('http://localhost:5000/rooms')
            },
            {
                path: "/singleRoom/:id",
                element: <SingelRoom />,
            }
        ]
    },
]);

export default router