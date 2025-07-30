"use client";
import { useEffect, useState } from "react";

const CountUp = ({
  end,
  duration = 2000,
  decimal = false,
}: {
  end: number;
  duration?: number;
  decimal?: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / (duration / 30);
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{decimal ? count.toFixed(1) : Math.round(count)}</span>;
};

export default CountUp;
