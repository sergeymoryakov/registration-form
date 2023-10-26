import React from "react";
import Button from "./components/buttons/Button";
// import "./App.css";

function App() {
    function handleButtonOneClick() {
        alert("Button One Clicked");
    }

    function handleButtonTwoClick() {
        alert("I told you DO NOT try :(((");
    }

    return (
        <div className="container">
            <h3>Practicing Placeholder</h3>
            <Button buttonName={"Try Me"} onClick={handleButtonOneClick} />
            <Button
                buttonName={"Don't Try Me"}
                onClick={handleButtonTwoClick}
            />
        </div>
    );
}

export default App;
