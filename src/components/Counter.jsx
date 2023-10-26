import React from "react";
import "./Counter.css";

function Counter({ value, isLimit }) {
    const counterClassNames = isLimit ? "counter counter_alert" : "counter";
    return <p className={counterClassNames}>Counter: {value}</p>;
}

export default Counter;
