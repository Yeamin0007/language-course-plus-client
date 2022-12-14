import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../Layouts/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Faq from "../../pages/FAQ/Faq";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Courses from "../../pages/Courses/Courses";
import Category from "../../pages/Category/Category";
import Checkout from "../../pages/Checkout/Checkout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../../pages/Error/Error";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>, 
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://course-plus-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://course-plus-server.vercel.app/category/${params.id}`)

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
        ]
    }
])