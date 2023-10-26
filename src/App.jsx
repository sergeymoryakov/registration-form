import React from "react";
// import "./App.css";

function App() {
    function handleClick() {
        alert("button clicked");
    }

    function handleMouseOver() {
        console.log("Received MouseOver command :)");
    }

    function handleLinkClick(e) {
        e.preventDefault();
        console.log("Received Go-To-Link command");
        console.log(e.target);
    }

    return (
        <div className="container">
            <a onClick={handleLinkClick} href="https://moryakov.pro">
                Visit my Personal Page
            </a>
            <button onClick={handleClick} onMouseOver={handleMouseOver}>
                Try Me
            </button>
        </div>
    );
}

export default App;
