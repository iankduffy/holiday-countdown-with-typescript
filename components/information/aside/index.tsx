import MapComponent from 'components/map'

interface Props {

}

const Aside = ({}: Props) : JSX.Element => {

  return (
    <div className=''>
      <MapComponent />
      Contents
    </div>
  )
}

export default Aside