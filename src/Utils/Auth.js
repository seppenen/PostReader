import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Cookies from "js-cookie";

export function Auth() {
  const { accessToken } = useContext(AuthContext);

  //Update cookie
  if (typeof accessToken !== "undefined") {
    let now = new Date();
    now.setTime(now.getTime() + 3600 * 1000);
    Cookies.set("accessToken", accessToken, { expires: now });
  }

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
}
