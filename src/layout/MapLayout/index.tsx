import React, {useRef, useEffect, useState} from 'react'
import {Flex, Box, BoxProps} from '@chakra-ui/react'
import mapboxgl from 'mapbox-gl'
import {MapStyle} from './style'
import Map from '../../components/organisms/Map/Map'


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

export const MapLayout = ({ location, title, subtitle, className, googleMapsLink, startZoom = 10, endZoom = 11, interactive = false, ...props }: IProps) => {
  return (
    // <div className={styles.container}>
      <Map lat={-27} lng={153} />
    // </div>
  )
}