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

  const importComponent = (value) => {
    return lazy(() => import(`./Pages/${value}`));
  };

  componentArray.forEach(item => {
      const Component = importComponent(item);
      Object.entries(paths).forEach(([key]) => {
        if (key.includes(item.toLowerCase())) {
          paths[key] = Component;
        }
      });
    }
  );
  paths["/"] = importComponent("Posts");
  const LoginComponent = paths["/login"];

  return (
    <BrowserRouter basename={`${BASENAME}`}>
      <Routes>
        <Route key="login" path="/login" element={<LoginComponent />} />
        <Route element={<Auth />}>
          {Object.entries(paths).map(([key, Component], index) => {
            return <Route key={index} path={key} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
