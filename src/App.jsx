import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import CounterServiceInstance from "./services/CounterServiceInstance";

function App() {
    const [refresh, setRefresh] = useState({});

    CounterServiceInstance.onUpdate = function () {
        setRefresh({});
    };

    function incrementCount() {
        CounterServiceInstance.increment();
    }

    function decrementCount() {
        CounterServiceInstance.decrement();
    }
    return (
        <>
            <h1>Counter</h1>
            <p>count: {CounterServiceInstance.count}</p>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    );
}

export default App;
