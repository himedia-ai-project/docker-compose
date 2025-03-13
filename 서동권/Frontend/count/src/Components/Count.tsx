import axios from "axios";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    // 서버에서 카운트 증가 처리

    // axios.post("http://localhost:8080/count", {
    //   count: count + 1,
    // });

    setCount(count + 1);
  };

  const handleDecrease = () => {
    // 서버에서 카운트 감소 처리

    // axios.post("http://localhost:8080/count", {
    //   count: count - 1,
    // });

    // 0보다 작은 수는 감소 못하게 막기
    if (count > 0) {
      setCount(count - 1);
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
