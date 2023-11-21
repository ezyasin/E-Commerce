// INCOMPLETE

import { useEffect, useState } from "react";

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
  const [days, setDays] = useState(6);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    // const interval = setInterval(updateCountdown, 1000);
    // return () => clearInterval(interval);
  }, []);

  //   const updateCountdown = () => {
  //     setSeconds((prevSeconds) => (prevSeconds === 0 ? 59 : prevSeconds - 1));
  //     setMinutes((prevMinutes) =>
  //       prevSeconds === 0
  //         ? prevMinutes === 0
  //           ? 59
  //           : prevMinutes - 1
  //         : prevMinutes
  //     );
  //     setHours((prevHours) =>
  //       prevSeconds === 0 && prevMinutes === 0
  //         ? prevHours === 0
  //           ? 23
  //           : prevHours - 1
  //         : prevHours
  //     );
  //     setDays((prevDays) =>
  //       prevSeconds === 0 && prevMinutes === 0 && prevHours === 0
  //         ? prevDays === 0
  //           ? 0
  //           : prevDays - 1
  //         : prevDays
  //     );
  //   };

  const padNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center my-8">
      <div className="grid grid-cols-4 gap-8">
        <CountdownCircle value={padNumber(days)} label="Days" />
        <CountdownCircle value={padNumber(hours)} label="Hours" />
        <CountdownCircle value={padNumber(minutes)} label="Minutes" />
        <CountdownCircle value={padNumber(seconds)} label="Seconds" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <OtherCountdown />
    </div>
  );
};

export default Home;
