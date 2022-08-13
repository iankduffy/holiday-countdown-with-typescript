import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number | '00'
  hours: number | '00'
  minutes: number | '00'
  seconds: number | '00'
}

const getDays = (difference: Number) => Math.floor(difference / (1000 * 60 * 60 * 24))

const getHours = (difference: Number) => Math.floor((difference / (1000 * 60 * 60)) % 24)

const getMinutes = (difference: Number) => Math.floor((difference / 1000 / 60) % 60)

const getSeconds = (difference: Number) => Math.floor((difference / 1000) % 60)

const useCountDown = (date: string) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  })

  const calculateTimeLeft = () => {
    const difference : Number = Number(new Date(date)) - Number(new Date());
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
  }, [])

  return timeLeft;
}

export default useCountDown