import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/index.jsx';
import { DarkModeProvider } from './context/DarkMode';

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <DarkModeProvider>
                <RouterProvider router={router} />
            </DarkModeProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
