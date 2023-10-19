import { createBrowserRouter } from "react-router-dom";
import PrivateLayout from "../layout/PrivateLayout";
import ProductsIndex from "../pages/products/ProductsIndex";
import ToppinsIndex from "../pages/toppins/ToppinsIndex";
import WorkersIndex from "../pages/ workers/WorkersIndex";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <PrivateLayout />,
        children: [
            {
                index: true,
                element: <ProductsIndex />
            },
            {
                path: "workers",
                element: <WorkersIndex />
            },
            {
                path: "toppins",
                element: <ToppinsIndex />
            }
        ]
        
    }
]);