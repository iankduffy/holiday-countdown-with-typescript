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
        className='object-cover blur-sm scale-105'
        alt="Holiday"
      />
      <div className='z-10 font-bold absolute h-full w-full text-center items-center justify-center flex flex-col drop-shadow-lg'>
        {children}
      </div>
    </div>
  )
}

export default HeroImage