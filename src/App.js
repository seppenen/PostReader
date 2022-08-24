import "./App.css";
import { CustomRoutes } from "./Router/Routes";
import { lazy, Suspense } from "react";

const  Posts  = lazy(() => import("./Test"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <CustomRoutes />
      </Suspense>
    </>
  );
}

export default App;
