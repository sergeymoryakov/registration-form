import React from "react";
import "./Button.css";

function Button({ btnClass, isDisabled, buttonName, onClick }) {
    return (
        <button className={btnClass} disabled={isDisabled} onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;
