import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Count = styled.div`
  font-size: 20px;
`;

const CountButton = styled.button`
  width: 40px;
  height: 20px;
  font-size: 12px;
  padding: 2px;
  margin: 5px;
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/count")
      .then((response) => {
        setCount(response.data.count);
      })
      .catch((error) => console.error("Error fetching count:", error));
  }, []);

  const handleClickAdd = () => {
    const newCount = count + 1;
    setCount(newCount);

    axios
      .post("http://127.0.0.1:8000/count", { count: newCount })
      .then((response) => {
        console.log("Count updated:", response.data);
      })
      .catch((error) => console.error("Error updating count:", error));
  };

  const handleClickSubtract = () => {
    const newCount = count - 1;
    setCount(newCount);

    axios
      .post("http://127.0.0.1:8000/count", { count: newCount })
      .then((response) => {
        console.log("Count updated:", response.data);
      })
      .catch((error) => console.error("Error updating count:", error));
  };

  return (
    <Root>
      <Count>카운트 : {count}</Count>
      <CountButton onClick={handleClickAdd}>+1</CountButton>
      <CountButton onClick={handleClickSubtract}>-1</CountButton>
    </Root>
  );
}

export default App;
