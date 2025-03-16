import "./App.css";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchCount = async () => {
            const response = await axios.get("http://localhost:8080/api/count");
            setCount(response.data);
        };
        fetchCount();
    }, []);

    const handleIncrement = async () => {
        const response = await axios.post("http://localhost:8080/api/increment");
        setCount(response.data);
    };

    const handleDecrement = async () => {
        const response = await axios.post("http://localhost:8080/api/decrement");
        setCount(response.data);
    };

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>카운트 증가</button>
            <button onClick={handleDecrement}>카운트 감소</button>
        </div>
    );
}

export default App;
