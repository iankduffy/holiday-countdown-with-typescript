import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Countdown from 'components/countdown'
import HeroImage from 'components/heroImage'
import Information from 'components/information'

const Home: NextPage = () => {
  const holidayDate = '10-13-2022'

  return (
    <div className="">
      <Head>
        <title>Countdown to Holiday | Gran Canaria</title>
      </Head>
      <HeroImage >
        <h1 className='header'>We Go to Gran Canaria</h1>
        <Countdown date={holidayDate}/>
      </HeroImage>
      <Information />
    </div>
  )
}

export default Home
