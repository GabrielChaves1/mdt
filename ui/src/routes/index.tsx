import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/page/Home';
import Arrest from '@/page/Arrest';


const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/arrest", element: <Arrest /> },
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
