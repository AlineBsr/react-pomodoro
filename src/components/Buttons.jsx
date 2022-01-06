import React , { useState } from "react";
import clsx from "clsx";

export default function Button(props) {
    const { className, ...rest } = props;
    const classes = clsx("ui-button", className);

    const [ value, setValue ] = useState("Start");

    return (
        <button className={ classes } onClick={ () => { value === "Start" ? setValue("Stop") : setValue("Start")} } { ...rest }>
            { value }
        </button>
    );
}