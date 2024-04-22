import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    token: null,
    setToken: () => {},
});

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
    const [token, _setToken] = useState(sessionStorage.getItem("token"));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            sessionStorage.setItem("token", token);
        } else {
            sessionStorage.removeItem("token");
        }
    };

    return (
        <stateContext.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </stateContext.Provider>
    );
};

export const useStateContext = () => useContext(stateContext);
