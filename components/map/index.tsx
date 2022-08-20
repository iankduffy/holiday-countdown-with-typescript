import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 27.7564527,
  lng: -15.6053918
}

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map