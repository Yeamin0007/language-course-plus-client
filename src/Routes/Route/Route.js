import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Main from "../../Layouts/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Faq from "../../pages/FAQ/Faq";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Courses from "../../pages/Courses/Courses";
import Category from "../../pages/Category/Category";
import CourseMain from "../../pages/CourseMain/CourseMain";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>, 
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
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                element: <CourseMain></CourseMain>
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