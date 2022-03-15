
import React, { useRef, useEffect, useState } from 'react';
import {Box} from '@chakra-ui/react'
import mapboxgl from '!mapbox-gl';
import {MapStyle} from './style'

mapboxgl.accessToken = process.env.MAPBOX

export interface MapLayoutProps {
  lng: number
  lat: number
  zoom: number
}

export const MapLayout = (props: MapLayoutProps) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(props.lng);
  const [lat, setLat] = useState(props.lat);
  const [zoom, setZoom] = useState(props.zoom);

  useEffect(() => {
    // initialize map only once
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current){
      return

    }else 
    {
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }

  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <Box ref={mapContainer} css={MapStyle()} className="map-container" />
    </div>
  );
}
