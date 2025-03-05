import { useEffect, useState } from "react";

export const TodoDateTime = () => {
  const [timeDate, setTimeDate] = useState("");

  const datetime = () => {
    const dateString = new Date().toLocaleDateString();
    const TimeString = new Date().toLocaleTimeString();
    return setTimeDate(`${dateString}-${TimeString}`);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      datetime();
    }, 1000);
    return ()=>clearInterval(interval)
  });

  return (
    <>
    
      <div className="todoDateTime">{timeDate}</div>
    </>
  );
};
