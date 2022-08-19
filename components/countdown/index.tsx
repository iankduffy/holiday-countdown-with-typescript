import useCountDown, { TimeLeft } from 'hooks/useCountdown'


interface Props {
  date: string
}

const Countdown = ({ date }: Props) : JSX.Element => {
  const { days, hours, minutes, seconds } = useCountDown(date)

  return (
    <div className='text-9xl countdown'>
      {days}:{hours}:{minutes}:{seconds}
    </div>
  )
}

export default Countdown