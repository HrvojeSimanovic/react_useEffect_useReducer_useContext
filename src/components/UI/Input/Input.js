import React, { useRef, forwardRef, useImperativeHandle } from "react";

import classes from "./Login.module.css";

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(
        ref,
        () => {
            return {
                focus: activate,
            };
        },
        []
    );
    // console.log(ref);
    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
});

export default Input;
