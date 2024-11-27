import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  //   let count = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <Link to="/shop" className="btn btn-secondary">
        Перейти в магазин
      </Link>
      <button
        className="btn btn-primary"
        onClick={() => {
          //   count++;
          // count === 2
          //   setCount(count + 1); // count = 3
          //   setCount(count + 1); // count = 3
          //   setCount(count + 1); // count = 3
          setCount((prev) => prev + 1); // count = 3
          setCount((prev) => prev + 1); // count = 4
          setCount((prev) => prev + 1); // count = 5
          console.log(count);
        }}
      >
        +3
      </button>
      <div>Сейчас счётчик равен: {count}</div>
    </div>
  );
}
