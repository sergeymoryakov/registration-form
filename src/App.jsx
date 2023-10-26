import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/buttons/Button";
// import "./App.css";

const COUNTER_INIT = 0;
const COUNTER_STEP = 1;
const COUNTER_LIMIT_BOTTOM = -10;
const COUNTER_LIMIT_TOP = 10;

function App() {
    const [counter, setCounter] = useState(COUNTER_INIT);
    // const [dayTime, setDayTime] = useState("Noon");

    // console.log(useState(0));

    function handleButtonOneClick() {
        // Possible simple:
        // setCounter(counter - 1);
        // or:
        setCounter((prevCounter) => {
            // console.log(prevCounter);
            return prevCounter - COUNTER_STEP;
        });
        // setDayTime("Morning");
    }

    function handleButtonTwoClick() {
        // Possible simple:
        // setCounter(counter + 1);
        // or:
        setCounter((prevCounter) => {
            // console.log(prevCounter);
            return prevCounter + COUNTER_STEP;
        });
        // setDayTime("Afternoon");
    }

    function isBtnOneDisabled() {
        return counter <= COUNTER_LIMIT_BOTTOM;
    }

    function isBtnTwoDisabled() {
        return counter >= COUNTER_LIMIT_TOP;
    }

    function isOutOfLimit() {
        return counter <= COUNTER_LIMIT_BOTTOM || counter >= COUNTER_LIMIT_TOP;
    }

    return (
        <div className="container">
            {/* <h3>DayTime: {dayTime}</h3> */}
            {/* <h3>Counter: {counter}</h3> */}
            <Counter value={counter} isLimit={isOutOfLimit()} />

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
