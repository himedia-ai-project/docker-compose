import axios from "axios";
import { useEffect, useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState(0);

  const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:8080/api/counter";

  console.log(API_URL + " @@@@@@값을 확인중입니다 ");
  console.log(API_URL + " @@@@@@값을 확인중입니다 ");

  const getCounter = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching counter", error);
    }
  };

  useEffect(() => {
    getCounter();
  }, []);

  const updateCounter = async (type: string) => {
    try {
      // 감소 시 0보다 작아지지 않도록 처리
      if (type === "decrease" && count === 0) {
        return;
      }

      const response = await axios.post(`${API_URL}/${type}`);
      setCount(response.data.value);
    } catch (error) {
      console.error("Error updating counter:", error);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => updateCounter("increase")}>+</button>
      <button onClick={() => updateCounter("decrease")}>-</button>
    </div>
  );
};

export default Count;
