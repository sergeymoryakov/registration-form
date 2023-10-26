import React from "react";
import "./Button.css";

function Button({ isDisabled, buttonName, onClick }) {
    // const btnClass = btnClass;
    return (
        <button disabled={isDisabled} onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;
