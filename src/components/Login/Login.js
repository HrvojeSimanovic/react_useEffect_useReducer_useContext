import React, {
    useState,
    useReducer,
    useEffect,
    useContext,
    useRef,
} from "react";

import AuthContext from "../store/AuthContext";
import * as loginReducer from "../reducers/loginReducers";

import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import classes from "./Login.module.css";

const Login = () => {
    const { onLogin } = useContext(AuthContext);

    const [emailState, dispatchEmail] = useReducer(loginReducer.email, {
        email: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(
        loginReducer.password,
        {
            password: "",
            isValid: null,
        }
    );

    const [formIsValid, setFormIsValid] = useState(false);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "SET_EMAIL", val: event.target.value });
        dispatchEmail({
            type: "EMAIL_VALID",
            val: event.target.value.includes("@"),
        });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "SET_PASSWORD", val: event.target.value });
        dispatchPassword({
            type: "PASSWORD_VALID",
            val: event.target.value.trim().length > 6,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            onLogin(emailState.email, passwordState.password);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };
    // console.log(emailInputRef);
    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    isValid={emailState.isValid}
                    id={"email"}
                    label={"E-mail"}
                    value={emailState.email}
                    onChange={emailChangeHandler}
                />
                <Input
                    ref={passwordInputRef}
                    isValid={passwordState.isValid}
                    id={"password"}
                    label={"Password"}
                    value={passwordState.password}
                    onChange={passwordChangeHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
