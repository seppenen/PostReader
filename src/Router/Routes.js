import {protectedPaths} from './ProtectedPaths'
import Login from "../Pages/Login";
import { Auth } from "../Utils/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASENAME } from "../Resources/Constants";

export const CustomRoutes = () => {
 
  const protectedRoutes = () => {
    return Object.entries(protectedPaths).map(([key, value], index) => {
      return <Route key={index} path={key} element={value} />;
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
