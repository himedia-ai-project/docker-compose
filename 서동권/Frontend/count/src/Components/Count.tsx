import axios from "axios";
import { useEffect, useState } from "react";

const Count: React.FC = () => {
  // 상태 변수: count는 숫자 타입으로 선언
  const [count, setCount] = useState<number>(0);

  // 컴포넌트 마운트 시 카운트 값을 서버에서 가져옵니다.
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get<number>(
          "http://localhost:8080/api/count"
        );
        setCount(response.data);
      } catch (error) {
        console.error("There was an error fetching the count!", error);
      }
    };
    fetchCount();
  }, []);

  // 카운트 증가 처리
  const handleIncrease = async () => {
    try {
      const response = await axios.post<number>(
        "http://localhost:8080/api/count/increment"
      );
      setCount(response.data);
    } catch (error) {
      console.error("There was an error incrementing the count!", error);
    }
  };

  // 카운트 감소 처리
  const handleDecrease = async () => {
    if (count > 0) {
      try {
        const response = await axios.post<number>(
          "http://localhost:8080/api/count/decrement"
        );
        setCount(response.data);
      } catch (error) {
        console.error("There was an error decrementing the count!", error);
      }
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </div>
  );
};

export default Count;
