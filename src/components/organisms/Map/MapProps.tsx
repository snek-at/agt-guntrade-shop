import { FeatureCollection } from "./GeoJSONTypes";
import Markers from "./Markers";

/*
Props for the Map
*/
export default interface Props {
    width?: number;
    height?: number;
    lat: number;
    lng: number;
    zoom?: number;
    geoJSON?: FeatureCollection;
    layerColour?: string;
    markers?: Markers[];
    buttons?: JSX.Element[];
};