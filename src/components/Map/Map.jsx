import { Map, GeoJson, GeoJsonFeature, Marker } from "pigeon-maps";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const geoJsonFeatureSample = {
    type: "Feature",
    geometry: { type: "Point", coordinates: [2.0, 48.5] },
    properties: { prop0: "value0" },
};

const Maps = () => {
   
        useEffect(() => {
            AOS.init({ duration: 1500, });
        }, [])
    const center = [24.498, 91.77];
    return (
        <Map height={300} defaultCenter={[24.498, 91.77]} defaultZoom={4} data-aos="fade-up">
            <GeoJson
                svgAttributes={{
                    fill: "#d4e6ec99",
                    strokeWidth: "1",
                    stroke: "white",
                    r: "20",
                }}
            >
                <GeoJsonFeature feature={geoJsonFeatureSample} />
            </GeoJson>
            <Marker width={50} anchor={center}>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="50"
                    height="50"
                    viewBox="0 0 256 256"
                >
                    {/* Your SVG content */}
                    <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path d="M45 0c15.103 0 27.389 12.287 27.389 27.389C72.389 46.616 46.147 66.607 45 90c-1.147-23.393-27.389-43.384-27.389-62.611C17.611 12.287 29.897 0 45 0z"style={{ fill: 'rgb(255,80,80)', opacity: 1 }}  strokeLinecap="round" />
                        <circle cx="45.004999999999995" cy="26.575000000000003" r="9.205" style={{ fill: 'rgb(191,0,3)', opacity: 1 }} />
                    </g>
                </svg>
            </Marker>
        </Map>
    )
}

export default Maps