import axios from "axios";
import { useEffect, useState } from "react";

const Count: React.FC = () => {
  const [count, setCount] = useState(0);

  const API_URL = process.env.REACT_APP_API_URL + "/api/counter";
  const getCounter = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log(data.value + " 카운터 데이터 확인중");
      setCount(data.value);
    } catch (e) {
      console.error("Error fetching counter", e);
    }
  };

  useEffect(() => {
    getCounter();
  }, [count]);

  const updateCounter = async (type: string) => {
    try {
      // 감소 시 0보다 작아지지 않도록 처리
      if (type === "decrease" && count === 0) {
        return;
      }

      const {
        data: { value },
      } = await axios.post(`api/counter/${type}`);
      setCount(value);
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
