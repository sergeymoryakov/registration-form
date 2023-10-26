import React from "react";

function Button({ isDisabled, buttonName, onClick }) {
    // const btnClass = btnClass;
    return (
        <button disabled={isDisabled} onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;
