import {protectedPaths} from './ProtectedPaths'
import Login from "../Pages/Login";
import { Auth } from "../Utils/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASENAME } from "../Resources/Constants";
import { Suspense } from "react";

import { lazy } from "react";


export const CustomRoutes = () => {
 
  const protectedRoutes =  () => {
    return Object.entries(protectedPaths).map(  ([key, value], index) => {
      const Component = lazy(() => import(`../Pages/${value}`));
      return <Route key={index} path={key} element={<Component />} />;
    });
  };
  return (
    <BrowserRouter basename={`${BASENAME}`}>
      <Routes>
        <Route key="login" path="/login" element={<Login />} />
        <Route element={<Auth />}>{protectedRoutes()}</Route>
      </Routes>
    </BrowserRouter>
  );
};
