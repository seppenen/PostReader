
import Posts from "./Pages/Posts";
import Login from "./Pages/Login";
import {RequireAuth} from "./Components/RequireAuth";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export const CustomRoutes = () => {

    const protectedPaths = {
        '/': <Posts/>,
        'posts': <Posts/>,
        'posts/:id': <Posts/>,
    }
    const protectedRoutes = () => {
            return Object.entries(protectedPaths).map(([key, value]) => {
                   return  <Route key={key} path={key} element={value}/>
            })
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route key="login" path="/login" element={<Login/>}/>
                <Route element={<RequireAuth/>}>
                    {protectedRoutes()}
                </Route>
            </Routes>
        </BrowserRouter>
    )
    }


