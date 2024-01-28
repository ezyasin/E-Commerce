import { useState, useEffect } from "react";

const CountdownCircle = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="rounded-full h-16 w-16 bg-white flex items-center justify-center mx-auto mb-2">
        <span className="text-black text-4xl font-bold">{value}</span>
      </div>
      <span className="text-sm text-gray-200">{label}</span>
    </div>
  );
};

const OtherCountdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("2024-06-14T23:59:59");
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

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft === null) {
    return <div>Loading...</div>;
  }

  const padNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center my-8">
      <div className="grid grid-cols-4 gap-8">
        <CountdownCircle value={padNumber(timeLeft.days)} label="Days" />
        <CountdownCircle value={padNumber(timeLeft.hours)} label="Hours" />
        <CountdownCircle value={padNumber(timeLeft.minutes)} label="Minutes" />
        <CountdownCircle value={padNumber(timeLeft.seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default OtherCountdown;
