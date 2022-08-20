import MapComponent from 'components/map'

interface Props {

}

const Aside = ({}: Props) : JSX.Element => {

  return (
    <div className='sticky'>
      <MapComponent />
    </div>
  )
}

export default Aside