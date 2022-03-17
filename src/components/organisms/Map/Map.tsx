import * as React from 'react'
import {useMemo} from 'react'
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import Pin from './pin'
import {Box} from '@chakra-ui/react'

const CITIES = [
  {
    city: 'New York',
    population: '8,175,133',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg',
    state: 'New York',
    latitude: 40.6643,
    longitude: -73.9385
  }
]

const TOKEN = process.env.GATSBY_MAPBOX_ACCESS_TOKEN

export default function App() {
  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom">
          <Pin onClick={() => null} />
        </Marker>
      )),
    []
  )

  return (
    <Box w="100vw" bg="red">
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0
        }}
        style={{width: '100%', height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={TOKEN}>
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}
      </Map>
    </Box>
  )
}
