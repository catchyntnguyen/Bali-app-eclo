// PickupPage.tsx
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const PickupPage: React.FC = () => {
    const [pickupLocation, setPickupLocation] = useState<{ lat: number; lng: number } | null>(null);
    const history = useHistory();
    useEffect(() => {
        const checkTabbar = document.querySelector('.tabbar');
        if (checkTabbar) {
            checkTabbar.classList.add('hidden');
        }

        return () => {
            if (checkTabbar) {
                checkTabbar.classList.remove('hidden');
            }
        };
    }, []);
    // Hook để lấy vị trí khi người dùng nhấp trên bản đồ
    const MapClick = () => {
        useMapEvents({
            click(event:any) {
                const { lat, lng } = event.latlng;
                setPickupLocation({ lat, lng });
            },
        });

        return null;
    };

    const handleNext = () => {
        if (pickupLocation) {

            history.push({
                pathname: "/destination",
                state: { pickupLocation },
            });
        }
    };

    return (
        <>
            <div >
                <MapContainer center={[21.0285, 105.8542]} zoom={13} style={{ height: "90vh", width: "100%" }}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MapClick />
                    {pickupLocation && (
                        <Marker position={[pickupLocation.lat, pickupLocation.lng]}>
                            <Popup>Điểm Đón</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
            <div className="underMap">
                <button onClick={handleNext} disabled={!pickupLocation}>Pick up</button>
            </div>
        </>
    );
};

export default PickupPage;
