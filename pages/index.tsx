import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Countdown from 'components/countdown'
import HeroImage from 'components/heroImage'

const Home: NextPage = () => {
  const holidayDate = '10-13-2022'

  return (
    <div className="relative">
      <Head>
        <title>Countdown to Holiday | Gran Canaria</title>
      </Head>
      <HeroImage >
        <Countdown date={holidayDate}/>
      </HeroImage>
    </div>
  )
}

export default Home
