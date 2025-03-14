import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const response = await fetch("http://localhost:8000/count");
      const data = await response.json();
      setCount(data.count);
    };
    fetchCount();
  }, []);

  const handleIncrement = async () => {
    const response = await fetch("http://localhost:8000/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setCount(data.count);
  };

  const handleDecrement = async () => {
    const response = await fetch("http://localhost:8000/decrement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setCount(data.count);
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
