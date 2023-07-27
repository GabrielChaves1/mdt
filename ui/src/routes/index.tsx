import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import User from '@/page/User';

const Home = React.lazy(() => import('@/page/Home'));
const Arrest = React.lazy(() => import('@/page/Arrest'));

const routeConfig = [
    { path: "/", element: <Home /> },
    { path: "/arrest", element: <Arrest /> },
    { path: "/user", element: <User /> },
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
