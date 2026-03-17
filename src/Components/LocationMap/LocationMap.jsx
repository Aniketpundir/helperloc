import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { useSelector } from "react-redux";

/* ================= FIX MARKER ================= */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

/* ================= AUTO VIEW ================= */

const SetViewOnMarker = ({ lati, longi }) => {
    const map = useMap();

    useEffect(() => {
        if (lati && longi) {
            map.setView([lati, longi], 15);
        }
    }, [lati, longi, map]);

    return null;
};

/* ================= MAIN ================= */

const LocationMap = () => {

    /* ✅ REDUX LAT LONG */

    const { latitude: lati, longitude: longi, district, state, pinCode } =
        useSelector((s) => s.location);

    /* ✅ SAFE CHECK */

    if (!lati || !longi) {
        return <p>Fetching your location...</p>;
    }

    return (

        <div style={{ height: "200px", width: "100%", borderRadius: "20px" }}>

            <MapContainer
                center={[lati, longi]}
                zoom={13}
                style={{ height: "100%", width: "100%", borderRadius: "20px" }}
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[lati, longi]}>
                    <Popup>
                        <b>Your Location</b>
                        <br />
                        {district}, {state} - {pinCode}
                    </Popup>
                </Marker>

                <SetViewOnMarker lati={lati} longi={longi} />

            </MapContainer>

        </div>
    );
};

export default LocationMap;