import React from "react";
import "./Button-link.css";

function ButtonLink({ buttonName, btnClass, onClick }) {
    return (
        <button onClick={onClick} className={btnClass}>
            {buttonName}
        </button>
    );
}

export default ButtonLink;
