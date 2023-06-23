import {useCallback, useEffect, useState} from 'react';

const interval =
  (delay = 0) =>
  callback =>
    useEffect(() => {
      const id = setInterval(callback, delay);
      console.log('@useEffect');

      return () => clearInterval(id);
    }, [callback]);

const useSecondsInterval = interval(1000);

export const useCountdown = (timerDate: number) => {
  const timerInMill = new Date(timerDate).getTime();

  const [countDown, setCountDown] = useState(
    timerInMill - new Date().getTime(),
  );
  const [start, setStart] = useState(true);
  const call = useCallback(() => {
    console.log('@useCallback');
    setCountDown(timerInMill - new Date().getTime());
    // call function only runs when start is true
  }, [start]);
  useSecondsInterval(call);
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};
