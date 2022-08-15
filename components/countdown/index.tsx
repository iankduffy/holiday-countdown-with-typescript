import useCountDown from 'hooks/useCountdown'

interface Props {
  date: string
}

const Countdown = ({ date }: Props) : JSX.Element => {
  const { days, hours, minutes, seconds } = useCountDown(date)

  return (
    <div className='text-9xl font-bold absolute h-full w-full text-center items-center justify-center countdown flex'>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  )
}

export default Countdown