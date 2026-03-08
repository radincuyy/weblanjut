import React, { useState } from "react";

const Counter = () => {
    // Mendeklarasikan state count dengan nilai awal 0
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <button onClick={() => setCount(count - 1)}>Kurangi</button>
        </div>
    );
};

export default Counter;