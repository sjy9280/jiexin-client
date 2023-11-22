import {Login} from "../pages/user/Login";
import {createHashRouter} from "react-router-dom";
import Register from "../pages/user/Register";

const router = createHashRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default router