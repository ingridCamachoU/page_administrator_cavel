import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './routes/index.jsx';
import { DarkModeProvider } from './context/DarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <DarkModeProvider>
            <RouterProvider router={router} />
        </DarkModeProvider>

    </React.StrictMode>,
);
