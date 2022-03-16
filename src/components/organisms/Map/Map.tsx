import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import {Layer, Marker, Source} from "react-map-gl";
import Markers from "./Markers";
import "./styles.css";
import Props from "./MapProps";
/*
Map Component Written By Magnus Jackson on 15/12/2021

Uses react-map-gl for mapping library
https://visgl.github.io/react-map-gl/

Uses Mapbox for Mapping API 
https://www.mapbox.com/ 
*/

// Access Token
const TOKEN = process.env.GATSBY_MAPBOX_ACCESS_TOKEN


/*
Marker Component
Component itself handles all click, enter, leave, and drag events
For a list of functionality see the Markers Interface 
*/
function Mark(props: Markers) {
    const [pos, setPos] = useState({lat:props.lat, lng: props.lng});

    function handleClick() {
        if (typeof props.click === "function") {
            props.click();
        }
    }

    function handleMouseEnter(e: React.MouseEvent) {
        if (typeof props.MEnter === "function") {
            props.MEnter(e);
        }
    }

    function handleMouseLeave(e: React.MouseEvent) {
        if (typeof props.MLeave === "function") {
            props.MLeave(e);
        }
    }

    function drag(e: any) {
        let [lng, lat] = e.lngLat;
        setPos({lat:lat, lng:lng});

        if (typeof props.dragEnd === "function") {
            props.dragEnd(e);
        }
    }

    return (
        <div
        onMouseEnter={e => handleMouseEnter(e)}
        onMouseLeave={e => handleMouseLeave(e)}>
            <Marker
            onClick={handleClick}
            latitude={pos.lat}
            longitude={pos.lng}
            draggable={props.draggable}
            onDragEnd={(e) => drag(e)}>
                {props.marker}
            </Marker>
        </div>
    );
}

/*
Handle creating and pushing each marker to a marker array 

Each marker is of type Mark
*/
function handleMarkers(markers: Markers[] | undefined):any[] {
    if (typeof markers === "undefined"){
        return []
    } else {
        var returnMarkers:JSX.Element[] = [];
        markers.forEach((marker) => {
            returnMarkers.push(<Mark {...marker} />);
        });
        return returnMarkers
    }
}

/*
Map made use react-map-gl
https://visgl.github.io/react-map-gl/ 
self handles all: geoJSON, Markers, Top Bar Buttons, and Updating

Optional Props:
    geoJSON as FeatureCollection,
    zoom as number,
    width as number (Should specify),
    height as number (Should specify),
    buttons as JSX.Element Button Array,
    markers as Marker Type Array

Required Props:
    lat as number,
    Lng as number
*/
export default function Map(props: Props):JSX.Element {
    const data = props.geoJSON;

    const [viewport, setViewport] = useState({
        width:(props.width) ? props.width : 800,
        height:(props.height) ? props.height : 600,
        latitude: props.lat,
        longitude:props.lng,
        zoom: (typeof props.zoom !== "undefined") ? props.zoom : 10
    });

    useEffect(() => {
        setViewport({
            width:viewport.width,
            height: viewport.height,
            latitude:props.lat,
            longitude:props.lng,
            zoom: viewport.zoom
        });
    }, [props]);

    const markers = handleMarkers(props.markers);

    return (
        <div>
            <div className="topBar">
                lat: {viewport.latitude.toFixed(3)} | lng: {viewport.longitude.toFixed(3)} {(props.buttons) ? "|" : ""} {props.buttons}
            </div>
            <ReactMapGL
            {...viewport}
            mapboxAccessToken={TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(nextView:typeof viewport) => setViewport(nextView)}>
                {/* GeoJSON */}
                <Source id="my-data" type="geojson" data={data}>
                    <Layer 
                    id="point"
                    type="circle"
                    paint={{
                        "circle-radius": 5,
                        "circle-color": (typeof props.layerColour !== "undefined") ? props.layerColour : "#007cbf"}}/>
                </Source>
                {markers}
            </ReactMapGL>
        </div>
    );
}
