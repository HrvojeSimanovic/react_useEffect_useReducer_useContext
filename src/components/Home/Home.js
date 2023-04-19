import React, { useContext } from "react";
import AuthContext from "../store/AuthContext";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";

const Home = () => {
    const { onLogout } = useContext(AuthContext);

    return (
        <Card className={classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={onLogout}>log out</Button>
        </Card>
    );
};

export default Home;
