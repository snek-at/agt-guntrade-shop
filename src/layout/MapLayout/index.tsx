import React, {useRef, useEffect, useState} from 'react'
import {Flex, Box, BoxProps} from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import {MapStyle} from './style'
import Map from '../../components/organisms/Map/Map'
import {Logo} from '../../common/assets'


mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN!

interface IProps extends BoxProps {
  location: [number, number],
  title: string
  subtitle: string
  googleMapsLink: string
  startZoom?: number
  endZoom?: number
  interactive?: boolean
}

// <StaticImage style={{width: '100%'}} src={popupInfo.image} alt={popupInfo.name} />
// <GatsbyImage image={gatsbyimage.gatsbyImageData} alt={popupInfo.name} />
const markers = [
  {
    name: 'AGT Guntrade',
    city: 'Ried im Innkreis',
    zip_code:'4910',
    address: 'Wildfellnerstraße 22/1',
    image: <Logo />,
    description: '',
    latitude: 46.53825,
    longitude: 14.29214
  }
]

export const MapLayout = ({ location, title, subtitle, className, googleMapsLink, startZoom = 10, endZoom = 11, interactive = false, ...props }: IProps) => {
  return (
    // <div className={styles.container}>
      <Map latitude={46.53825} longitude={14.29214} zoom={16} markers={markers} />
    // </div>
  )
}