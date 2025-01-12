import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import Journal from "../pages/Journal.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import More from "../pages/More.jsx";
import Catalog from "../pages/Catalog.jsx";
import Auth from "../pages/Auth.jsx";
import NewWO from "../components/NewWO.jsx";

 export const router = createBrowserRouter([
     {
         path: "/",
         element: <Layout/>,
         errorElement: <ErrorPage/>,
         children: [
             {
                 index: true,
                 element:<Home/>
             },
             {
                 path: 'journal',
                 element:<Journal/>
             },
             {
                 path: 'catalog',
                 element:<Catalog/>
             },
             {
                 path: 'more',
                 element:<More/>
             },
             {
                 path: 'auth',
                 element:<Auth/>
             },
             {
                 path: 'newWO',
                 element:<NewWO/>
             }
         ]

     }
 ])
