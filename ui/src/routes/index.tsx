import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const CourseDetails = lazy(() => import('@/page/Courses/pages/CourseDetails'));
const ArrestList = lazy(() => import('@/page/Arrest/pages/ArrestList'));
const NewArrest = lazy(() => import('@/page/Arrest/pages/NewArrest'));
const Profile = lazy(() => import('@/page/Profile'));
const Home = lazy(() => import('@/page/Home'));
const Arrest = lazy(() => import('@/page/Arrest'));
const FindUser = lazy(() => import("@/page/FindUser"));
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
            <Route path='user' element={<FindUser />} />
            <Route path='user/:id' element={<Profile />} />
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
