import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from './../pages/Contact/Contact';
import CardPage from "../pages/CardPage/CardPage";

const Routs = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"api",
                element:<CardPage/>,
                loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
            }
        ]
    }
])
export default Routs;