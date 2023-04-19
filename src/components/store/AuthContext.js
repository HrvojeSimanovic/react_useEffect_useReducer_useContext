import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: null,
    onLogin: null,
});

export const AuthContextProvider = (props) => {
    const localStorageIsUserLoggedInfo = localStorage.getItem("isLogged");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLogged", "1");
        setIsLoggedIn(true);
    };

    useEffect(() => {
        if (localStorageIsUserLoggedInfo === "1") {
            setIsLoggedIn(true);
        }
    }, [localStorageIsUserLoggedInfo]);

    const logoutHandler = () => {
        localStorage.removeItem("isLogged");
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
