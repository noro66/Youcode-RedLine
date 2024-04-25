import { createContext, useContext, useState } from "react";
import {jwtDecode} from "jwt-decode";

const stateContext = createContext({
    user: null,
    token: null,
    setToken: () => {},
    setUser: () => {},
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {

    const [token, _setToken] = useState(sessionStorage.getItem("token"));
    const buffer = token ?  jwtDecode(token).user :  null
    const [user, setUser] = useState(buffer);
    const [categories, setCategories] = useState([]);
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            sessionStorage.setItem("token", token);
            setUser(jwtDecode(token).user);
        } else {
            sessionStorage.removeItem("token");
            setUser({});
        }
    };


    return (
        <stateContext.Provider value={{
            user,
            token,
            setToken,
            setUser,
            setCategories,
            categories
        }}>
            {children}
        </stateContext.Provider>
    );
};

export const useStateContext = () => useContext(stateContext);
