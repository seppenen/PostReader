import Posts from "./Pages/Posts";
import Login from "./Pages/Login";
import {Auth} from "./Utils/Auth";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {BASE_URL} from "./Resources/Constants";

export const CustomRoutes = () => {
    const protectedPaths = {
        '/': <Posts/>,
        '/posts': <Posts/>,
        '/posts/:id': <Posts/>,

    }
    const protectedRoutes = () => {
        return Object.entries(protectedPaths)
            .map(([key, value]) => {
                return <Route key={key} path={key} element={value}/>
            })
    }
    return (
        <BrowserRouter basename={`${BASE_URL}`}>
            <Routes>
                <Route key="login" path="/login" element={<Login/>}/>
                <Route element={<Auth/>}>
                    {protectedRoutes()}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


