// DestinationPage.tsx
import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

const DestinationPage: React.FC = () => {
    const { state } = useLocation();
    const [destinationLocation, setDestinationLocation] = useState<{ lat: number; lng: number } | null>(null);
    const history = useHistory();

    const MapClick = () => {
        useMapEvents({
            click(event:any) {
                const { lat, lng } = event.latlng;
                setDestinationLocation({ lat, lng });
            },
        });

        return null;
    };

    const handleNext = () => {
        if (destinationLocation) {
            // Chuyển sang trang vẽ đường đi và truyền dữ liệu điểm đón và điểm đến
            history.push({
                pathname: "/route",
                state: { pickupLocation: state.pickupLocation, destinationLocation },
            });
        }
    };
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
    return (
        <>
            <div>
                <MapContainer center={[21.0285, 105.8542]} zoom={13} style={{ height: "90vh", width: "100%" }}>
                    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MapClick />
                    {state.pickupLocation && (
                        <Marker position={[state.pickupLocation.lat, state.pickupLocation.lng]}>
                            <Popup>Điểm Đón</Popup>
                        </Marker>
                    )}
                    {destinationLocation && (
                        <Marker position={[destinationLocation.lat, destinationLocation.lng]}>
                            <Popup>Điểm Đến</Popup>
                        </Marker>
                    )}
                </MapContainer>

            </div>
            <div className="underMap">
                <button onClick={handleNext} disabled={!destinationLocation}>Done</button>
            </div>
        </>
    );
};

export default DestinationPage;
