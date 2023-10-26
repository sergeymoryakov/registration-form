import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/buttons/Button";
// import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);
    // const [dayTime, setDayTime] = useState("Noon");

    // console.log(useState(0));

    function handleButtonOneClick() {
        // Possible simple:
        // setCounter(counter - 1);
        // or:
        setCounter((prevCounter) => {
            // console.log(prevCounter);
            return prevCounter - 1;
        });
        // setDayTime("Morning");
    }

    function handleButtonTwoClick() {
        // Possible simple:
        // setCounter(counter + 1);
        // or:
        setCounter((prevCounter) => {
            // console.log(prevCounter);
            return prevCounter + 1;
        });
        // setDayTime("Afternoon");
    }

    function isBtnOneDisabled() {
        return counter === -5;
    }

    function isBtnTwoDisabled() {
        return counter === 5;
    }

    return (
        <div className="container">
            {/* <h3>DayTime: {dayTime}</h3> */}
            {/* <h3>Counter: {counter}</h3> */}
            <Counter value={counter} />

            <div className="manipulators">
                <Button
                    isDisabled={isBtnOneDisabled()}
                    buttonName={"Deduct"}
                    onClick={handleButtonOneClick}
                />

                <Button
                    isDisabled={isBtnTwoDisabled()}
                    buttonName={"Add"}
                    onClick={handleButtonTwoClick}
                />
            </div>
        </div>
    );
}

export default App;
