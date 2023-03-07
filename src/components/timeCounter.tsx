import { useEffect, useState } from "react";

const timeCounter = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );
      const remaining = Math.floor((endOfDay.getTime() - now.getTime()) / 1000);
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="countdown | flex-group">
      <p>Offer ends in</p>
      <span>
        {`${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`}
      </span>
    </div>
  );
};

export default timeCounter;
