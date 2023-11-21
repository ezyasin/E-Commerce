import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2023-12-31T23:59:59");
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-600">
        Today's Flash Sales
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <p>Days</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
