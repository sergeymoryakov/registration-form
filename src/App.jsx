import React, { useState } from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import "./App.css";

function App() {
    const [currentForm, setCurrentForm] = useState("login");

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div className="container">
            {currentForm === "login" ? (
                <Login onFormSwitch={toggleForm} />
            ) : (
                <Signup onFormSwitch={toggleForm} />
            )}
        </div>
    );
}

export default App;
