import Image from 'next/image'

interface Props {
  children: React.ReactNode
}

const HeroImage = ({children}: Props) : JSX.Element => {
  return (
    <div className='h-screen relative'>
      <Image
        src={'/holiday-pic.jpeg'}
        layout='fill'
        className='object-cover blur-sm scale-105'
        alt="Holiday"
        width={1512}
        height={835}
        priority
      />
      <div className='z-10 font-bold absolute h-full w-full text-center items-center justify-center flex flex-col text-slate-50'>
        {children}
      </div>
    </div>
  )
}

export default HeroImage