import React from "react";
import "./Button-icon.css";

function ButtonIcon({ buttonIconImg, onClick }) {
    return (
        <button onClick={onClick} className="button-icon">
            <img src={buttonIconImg} className="icon" alt="icon" />
        </button>
    );
}

export default ButtonIcon;
