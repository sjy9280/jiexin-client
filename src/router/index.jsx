import {Login} from "../pages/user/Login";
import {createHashRouter} from "react-router-dom";
import Register from "../pages/user/Register";
import Layout from "../pages/layout";
import Chat from "../pages/chat";
import Contacts from "../pages/contacts";

const router = createHashRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/chat',
                element: <Chat/>
            },
            {
                path: '/contacts',
                element: <Contacts/>

            }
        ]
    }
])

export default router