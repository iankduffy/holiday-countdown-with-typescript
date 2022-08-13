import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useCountDown from '../hooks/useCountdown'

const Home: NextPage = () => {
  const { days, hours, minutes, seconds } = useCountDown('10-13-2022')

  return (
    <h1 className="text-7xl font-bold underline">
      {days}:{hours}:{minutes}:{seconds}
    </h1>
  )
}

export default Home
