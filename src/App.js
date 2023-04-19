import React, { useContext } from "react";

import AuthContext from "./components/store/AuthContext";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </>
    );
}

export default App;