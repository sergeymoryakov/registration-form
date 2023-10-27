import React from "react";
// import "./Counter.css";

function LogsHistory({ array }) {
    // const arrayLength = array.length;

    const logsHistoryList = array.map((log) => (
        <li>
            Action: {log.action}, Prev Value: {log.prevValue}, New Value:{" "}
            {log.newValue}
        </li>
    ));

    return (
        <>
            <h3>Logs History:</h3>
            <ul> {logsHistoryList} </ul>
        </>
    );
}

export default LogsHistory;
