import { Auth } from "./Utils/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BASENAME } from "./Resources/Constants";
import { lazy } from "react";


export const CustomRoutes = () => {

  const paths = {
    "/posts": null,
    "/posts/:id": null,
    "/login": null
  };

  const componentArray = ["Posts", "Login"];

  const getLazyComponent = (value) => {
    return lazy(() => import(`./Pages/${value}`));
  };

  componentArray.forEach(item => {
      const Component = getLazyComponent(item);
      Object.entries(paths).forEach(([key]) => {
        if (key.includes(item.toLowerCase())) {
          paths[key] = Component;
        }
      });
    }
  );
  paths["/"] = getLazyComponent("Posts");

  const routes = () => {
    const HomeComponent = paths["/login"];
    return (<>
      <Route key="login" path="/login" element={<HomeComponent />} />
      <Route element={<Auth />}>
        {Object.entries(paths).map(([key, Component], index) => {
          return <Route key={index} path={key} element={<Component />} />;
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
