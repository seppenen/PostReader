import { Auth } from "./Utils/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASENAME } from "./Resources/Constants";
import { lazy } from "react";

export const CustomRoutes = () => {

  const paths = {
    "/posts": null,
    "/posts/:id": null,
    "/login": null
  };

  const componentArray = ["Posts", "Login"];

  componentArray.forEach(item => {
      const Component = lazy(() => import(`./Pages/${item}`));
      Object.entries(paths).forEach(([key]) => {
        if (key.includes(item.toLowerCase())) {
          paths[key] = Component;
        }
      });
    }
  );
  paths["/"] = lazy(() => import("./Pages/Posts"));

  const routes = () => {
    const LoginComponent = paths["/login"];
    return (<>
      <Route key="login" path="/login" element={<LoginComponent />} />
      <Route element={<Auth />}>
        {Object.entries(paths).map(([key, Value], index) => {
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
