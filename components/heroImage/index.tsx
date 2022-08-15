import Image from 'next/image'

interface Props {
  children: React.ReactNode
}

const HeroImage = ({children}: Props) : JSX.Element => {

  return (
    <div className='h-screen'>
      <Image
        src={'/holiday-pic.jpeg'}
        layout='fill'
        className='object-cover'
        alt="Holiday"
      />
      {children}
    </div>
  )
}

export default HeroImage