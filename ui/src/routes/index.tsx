import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CourseDetails from '@/page/Courses/pages/CourseDetails';
import ArrestList from '@/page/Arrest/pages/ArrestList';
import NewArrest from '@/page/Arrest/pages/NewArrest';

const Home = lazy(() => import('@/page/Home'));
const Arrest = lazy(() => import('@/page/Arrest'));
const User = lazy(() => import("@/page/User"));
const RolesHierarchy = lazy(() => import("@/page/RolesHierarchy"));
const Configurations = lazy(() => import("@/page/Configurations"));
const ConfigurationList = lazy(() => import("@/page/Configurations/pages/List"));
const Articles = lazy(() => import("@/page/Configurations/pages/Articles"));
const Courses = lazy(() => import("@/page/Courses"));
const CourseList = lazy(() => import("@/page/Courses/pages/CourseList"));

const RoutesList: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="home"/>}/>
            <Route path='home' element={<Home/>} />
            <Route path='arrest' element={<Arrest />}>
                <Route path='/arrest/' element={<ArrestList />} />
                <Route path='/arrest/new' element={<NewArrest />} />
            </Route>
            <Route path='user' element={<User />} />
            <Route path='roles-hierarchy' element={<RolesHierarchy />} />
            <Route path='config' element={<Configurations />}>
                <Route path='/config/' element={<ConfigurationList />} />
                <Route path='/config/articles' element={<Articles />} />
            </Route>
            <Route path='courses' element={<Courses />}>
                <Route path='/courses/' element={<CourseList />} />
                <Route path='/courses/:id' element={<CourseDetails />} />
            </Route>
        </Routes>
    );
};

export default RoutesList;
