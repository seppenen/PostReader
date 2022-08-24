import Login from "../Pages/Login";
import { Auth } from "../Utils/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASENAME } from "../Resources/Constants";
import { lazy } from "react";

export const CustomRoutes = () => {

  const paths = {
    '/': null,
    '/posts': null,
    '/posts/:id': null,
  };

  const componentArray = ['Posts', 'Login'];

  componentArray.forEach(item => {
    const Component = lazy(() => import(`../Pages/${item}`));
    Object.entries(paths).forEach(([key]) => {
      if (key === '/') {
        paths[key] = lazy(() => import(`../Pages/Posts`));
      }
      if (key.includes(item.toLowerCase())) {
        paths[key] = Component;
      }
    })
  }
);
  const routes = () => {
    return (<>
      <Route key="login" path="/login" element={<Login />} />
      <Route element={<Auth />}>
        {Object.entries(paths).map(([key, Value], index) => {
          console.log(key, Value);
          return <Route key={index} path={key} element={<Value />} />;
        })}
      </Route>
    </>);
  };

  return (
    <BrowserRouter basename={`${BASENAME}`}>
      <Routes>
        {routes()}
      </Routes>
    </BrowserRouter>
  );
};
