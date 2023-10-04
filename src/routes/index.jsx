import { createBrowserRouter } from "react-router-dom";
import Private_Layout from "../layout/Private_Layout";
import Products_index from "../pages/products/Products_index";
import Workers_index from "../pages/ workers/ Workers_index";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Private_Layout />,
        children: [
            {
                index: true,
                element: <Products_index />
            },
            {
                path: "workers",
                element: <Workers_index />
            }
        ]
        
    }
]);