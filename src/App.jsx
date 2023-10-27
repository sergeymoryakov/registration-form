import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import Button from "./components/buttons/Button";
import LogsHistory from "./components/LogsHistory";

const COUNTER_INIT = 0;
const COUNTER_STEP = 1;
const COUNTER_LIMIT_BOTTOM = -10;
const COUNTER_LIMIT_TOP = 10;

function App() {
    const [counter, setCounter] = useState(COUNTER_INIT);
    const [logsArray, setLogsArray] = useState([]);

    function handleButtonOneClick() {
        const newCounter = counter - COUNTER_STEP;

        setCounter(newCounter);
        setLogsArray([...logsArray, newCounter]);
    }

    function handleButtonTwoClick() {
        const newCounter = counter + COUNTER_STEP;

        setCounter(newCounter);
        setLogsArray([...logsArray, newCounter]);
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

            <LogsHistory array={logsArray} />
        </div>
    );
}

export default App;
