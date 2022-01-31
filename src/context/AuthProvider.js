import { createContext, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const cookie = Cookies.get("accessToken");
  const [accessToken, setAccessToken] = useState(cookie);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
