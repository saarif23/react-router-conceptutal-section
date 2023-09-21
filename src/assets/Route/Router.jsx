import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About";
import Dashboard from "../Pages/Dashboard";
import Product from "../Pages/Product";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Dashboard/Profile";
import EditProfile from "../Pages/Dashboard/EditProfile";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch(`https://dummyjson.com/products`)

            },
            {
                path: "/products/:productId",
                element: <Product></Product>,
                loader: ({params})=> fetch(`https://dummyjson.com/products/${params.productId}`)
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/dashboard",
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                    {
                        path: "/dashboard/editProfile",
                        element: <EditProfile></EditProfile>
                    },
                   
                ]
            }
        ]
    }
])
export default myCreatedRoute;

