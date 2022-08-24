import "./App.css";
import { CustomRoutes } from "./router.service";
import { Suspense } from "react";


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
