import { useState, useEffect } from 'react'

export interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const getDays = (difference: number) => String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0')

const getHours = (difference: number) => String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0')

const getMinutes = (difference: number) => String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0')

const getSeconds = (difference: number) => String(Math.floor((difference / 1000) % 60)).padStart(2, '0')

const useCountDown = (date: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const calculateTimeLeft = () => {
    const difference : number = new Date(date).getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: getDays(difference),
        hours: getHours(difference),
        minutes: getMinutes(difference),
        seconds: getSeconds(difference),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft() as TimeLeft)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft() as TimeLeft)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [ ])

  return timeLeft;
}

export default useCountDown