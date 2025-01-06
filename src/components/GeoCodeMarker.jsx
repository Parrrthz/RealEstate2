import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import L from 'leaflet'; 
import "leaflet/dist/leaflet.css";
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as ELG from 'esri-leaflet-geocoder';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
})
L.Marker.prototype.options.icon = DefaultIcon

const GeoCodeMarker = ({address}) => {

    const map = useMap();
    const [position,setPosition] = useState([60,19]);

    useEffect(()=>{
        ELG.geocode().text(address).run((err,results,response)=>{
            if(results?.results?.lenght > 0){
                const{lat,lng} = results?.results[0].lating
                setPosition([lat,lng])
                map.flyTo([lat,lng],6)
            }
        })
    },[address])

  return (
    <Marker position={position} icon={DefaultIcon}>
        <Popup />
    </Marker>
  );
};

export default GeoCodeMarker;


// import React, { useEffect, useState } from "react";
// import { Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import * as ELG from "esri-leaflet-geocoder";

// // Set default icon for Leaflet markers
// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const GeoCodeMarker = ({ address }) => {
//   const map = useMap();
//   const [position, setPosition] = useState(null); // Start with no position
//   const [error, setError] = useState(null); // State to track geocoding errors

//   useEffect(() => {
//     if (!address) {
//       setError("No address provided.");
//       return;
//     }

//     // Use Esri Leaflet Geocoder to get coordinates
//     ELG.geocode()
//       .text(address)
//       .run((err, results) => {
//         if (err) {
//           console.error("Geocoding error:", err);
//           setError("Geocoding failed. Please try again.");
//           return;
//         }

//         if (results?.results?.length > 0) {
//           const { latlng } = results.results[0]; // Extract latlng from results
//           setPosition([latlng.lat, latlng.lng]);
//           map.flyTo([latlng.lat, latlng.lng], 13); // Fly to the location on the map with zoom level 13
//           setError(null); // Clear any previous error
//         } else {
//           console.warn("No results found for the given address.");
//           setError("No location found for the provided address.");
//         }
//       });
//   }, [address, map]);

//   return (
//     <>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {position && (
//         <Marker position={position} icon={DefaultIcon}>
//           <Popup>
//             <strong>Address:</strong> {address}
//             <br />
//             <strong>Coordinates:</strong> {position[0].toFixed(5)}, {position[1].toFixed(5)}
//           </Popup>
//         </Marker>
//       )}
//     </>
//   );
// };

// export default GeoCodeMarker;






// 2.44.00  completes map