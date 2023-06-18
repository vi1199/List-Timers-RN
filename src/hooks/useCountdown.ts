import {useEffect, useState} from 'react';

export const useCountdown = (timerDate: number) => {
  const timerInMill = timerDate - new Date().getTime();

  const [countDown, setCountDown] = useState(timerInMill);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(timerDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [timerDate]);

  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};
