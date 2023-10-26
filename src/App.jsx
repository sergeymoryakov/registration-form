import React from "react";
import { useState } from "react";
import Button from "./components/buttons/Button";
// import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);
    const [dayTime, setDayTime] = useState("Noon");

    console.log(useState(0));

    function handleButtonOneClick() {
        // Possible simple:
        // setCounter(counter - 1);
        // or:
        setCounter((prevCounter) => {
            console.log(prevCounter);
            return prevCounter - 1;
        });
        setDayTime("Morning");
    }

    function handleButtonTwoClick() {
        // Possible simple:
        // setCounter(counter + 1);
        // or:
        setCounter((prevCounter) => {
            console.log(prevCounter);
            return prevCounter + 1;
        });
        setDayTime("Afternoon");
    }

    return (
        <div className="container">
            <h3>DayTime: {dayTime}</h3>
            <h3>Counter: {counter}</h3>
            <div className="manipulators">
                <Button buttonName={"Deduct"} onClick={handleButtonOneClick} />
                <Button buttonName={"Add"} onClick={handleButtonTwoClick} />
            </div>
        </div>
    );
}

export default App;
