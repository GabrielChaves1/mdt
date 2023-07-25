import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/user", element: <User /> },
    { path: "/arrest", element: <Arrest /> },
    { path: "/detain", element: <Detain /> },
    { path: "/home", element: <Navigate to="/"/> },
    { path: "/members", element: <Members /> },
];

const RoutesList: React.FC = () => {
    return (
        <AnimatePresence>
            <Routes>
                {routeConfig.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </AnimatePresence>
    );
};

export default RoutesList;
