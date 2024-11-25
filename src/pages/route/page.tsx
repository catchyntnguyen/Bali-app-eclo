import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const RoutePage: React.FC = () => {
    const { state } = useLocation(); 
    const router = useHistory();
    const { pickupLocation, destinationLocation } = state || {}; 
    const [route, setRoute] = useState<L.LatLng[]>([]);

    useEffect(() => {
        if (pickupLocation && destinationLocation) {
            // Tạo đường đi giữa điểm đón và điểm đến
            const routePath = [
                L.latLng(pickupLocation.lat, pickupLocation.lng),
                L.latLng(destinationLocation.lat, destinationLocation.lng),
            ];
            setRoute(routePath);
        }
    }, [pickupLocation, destinationLocation]);
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
    const handleNext = (type: any) => {
        const checkTabbar = document.querySelector('.tabbar');

        if (type) {
            if (checkTabbar) {
                checkTabbar.classList.remove('hidden');
            }
            router.push('/billbooking');
        }
    };
    return (
        <div>
            <MapContainer
                center={pickupLocation ? [pickupLocation.lat, pickupLocation.lng] : [21.0285, 105.8542]}
                zoom={13}
                style={{ height: "90vh", width: "100%" }}
            >
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {/* Vẽ đường bằng Polyline */}
                {route.length > 0 && (
                    <Polyline positions={route} color="blue" weight={5} />
                )}
                {pickupLocation && (
                    <Marker position={[pickupLocation.lat, pickupLocation.lng]}>
                        <Popup>Điểm Đón</Popup>
                    </Marker>
                )}
                {destinationLocation && (
                    <Marker position={[destinationLocation.lat, destinationLocation.lng]}>
                        <Popup>Điểm Đến</Popup>
                    </Marker>
                )}
            </MapContainer>
            <div className="underMap">
                <button onClick={handleNext}>Pick up</button>
            </div>
        </div>
    );
};

export default RoutePage;
