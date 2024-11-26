import { IonContent, IonModal, IonRow } from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import SliderCar from "./SliderCar";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const position = [10.762622, 106.660172];

interface BoxCar {
    status: string;
    modalID:number;
}

const BoxActiviteCar: React.FC<BoxCar> = ({ status, modalID }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [ongoing, setOngoing] = useState(false);
    const [cssStatus, setCssStatus] = useState('');
    useEffect(() => {
        switch (status) {
            case "1":
                setOngoing(false);
                setCssStatus("FFC107");
                break;
            case "2":
            case "3":
                setOngoing(true);
                setCssStatus("2B3F6C");
                break;
            case "4":
                setOngoing(false);
                setCssStatus("00E6B3");
                break;
            default:
                setOngoing(false);
                setCssStatus("CCCCCC"); 
                break;
        }
    }, [status]);
    return (
        <div className='box-activity-car'>
            <div>
                <div className="b-activity-car-first">
                    <div className="b-activity-c-left">
                        <div className="b-activity-c-id">#123456</div>
                        <div className="b-activity-c-day">October 24, 2024, 10:00 AM</div>
                    </div>
                    <div className="b-activity-c-right ">
                        <button className="button" style={{ backgroundColor: `#${cssStatus}` }}>
                            S
                        </button>
                    </div>
                </div>
                <div className="b-activity-car-secondary">
                    <div className="b-activity-car-s-driver">
                        <div className="driver-content">
                            <div className="driver-content-1">
                                <div className="img-driver">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                </div>
                                <div className="Info-driver">
                                    <div className="driver-name text-base">
                                        John Doe
                                    </div>
                                    <div className="driver-phone text-base">
                                        123456789
                                    </div>
                                </div>
                            </div>
                            <div className="driver-content-2">
                                <div className="boxStat">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.43438 1.52831C9.63443 1.26342 10.0323 1.26342 10.2324 1.52831L13.0743 5.29135C13.1342 5.37057 13.2162 5.43019 13.31 5.46261L17.7671 7.00264C18.0809 7.11104 18.2038 7.48946 18.0137 7.76157L15.3131 11.6273C15.2562 11.7087 15.2249 11.8051 15.223 11.9044L15.1357 16.6192C15.1296 16.9511 14.8077 17.185 14.4901 17.0883L9.97905 15.7144C9.88409 15.6854 9.78266 15.6854 9.6877 15.7144L5.17663 17.0883C4.85909 17.185 4.53719 16.9511 4.53104 16.6192L4.4437 11.9044C4.44187 11.8051 4.41052 11.7087 4.35367 11.6273L1.65302 7.76157C1.46292 7.48946 1.58587 7.11104 1.89961 7.00264L6.3567 5.46261C6.45053 5.43019 6.53258 5.37057 6.59241 5.29135L9.43438 1.52831Z" stroke="#FFC107" stroke-width="1.5" />
                                    </svg>

                                    <div className="boxStat">
                                        <img src="/Star2.png" alt="" />
                                        <span className="rate text-base">4.9/5</span>
                                    </div>
                                </div>
                                <div className="boxContact">
                                    <div >
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5621 20.7183C17.6077 22.6726 12.6028 20.8363 8.38327 16.6167C4.16372 12.3972 2.32739 7.39227 4.2817 5.43795L5.56847 4.15118C6.4568 3.26286 7.92054 3.28634 8.83784 4.20363L10.8309 6.19672C11.7482 7.11401 11.7717 8.57776 10.8834 9.46609L10.607 9.74247C10.1274 10.2221 10.0804 10.9958 10.5261 11.5359C10.956 12.0568 11.4194 12.5756 11.9219 13.0781C12.4244 13.5806 12.9432 14.044 13.4641 14.4739C14.0042 14.9196 14.7779 14.8726 15.2575 14.393L15.5339 14.1166C16.4222 13.2283 17.886 13.2518 18.8033 14.1691L20.7964 16.1622C21.7137 17.0795 21.7371 18.5432 20.8488 19.4315L19.5621 20.7183Z" stroke="#2B3F6C" stroke-width="1.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.73903 20.5292L2.03188 20.2793H2.03188L2.73903 20.5292ZM4.27027 22.0605L4.52015 22.7676H4.52015L4.27027 22.0605ZM7.65817 21.2518L7.29451 21.9077L7.65817 21.2518ZM3.60104 17.0662L4.26804 16.7233L3.60104 17.0662ZM3.66731 17.9022L4.37446 18.1521L3.66731 17.9022ZM3.25 12.5C3.25 7.39137 7.39137 3.25 12.5 3.25V1.75C6.56294 1.75 1.75 6.56294 1.75 12.5H3.25ZM4.26804 16.7233C3.61751 15.4581 3.25 14.023 3.25 12.5H1.75C1.75 14.2671 2.17697 15.9367 2.93404 17.4092L4.26804 16.7233ZM3.44618 20.7791L4.37446 18.1521L2.96016 17.6523L2.03188 20.2793L3.44618 20.7791ZM4.02039 21.3533C3.66372 21.4793 3.32014 21.1358 3.44618 20.7791L2.03188 20.2793C1.48573 21.8249 2.97455 23.3138 4.52015 22.7676L4.02039 21.3533ZM6.54298 20.4619L4.02039 21.3533L4.52015 22.7676L7.04274 21.8762L6.54298 20.4619ZM12.5 21.75C10.8739 21.75 9.34798 21.3311 8.02184 20.5958L7.29451 21.9077C8.83751 22.7632 10.613 23.25 12.5 23.25V21.75ZM21.75 12.5C21.75 17.6086 17.6086 21.75 12.5 21.75V23.25C18.4371 23.25 23.25 18.4371 23.25 12.5H21.75ZM12.5 3.25C17.6086 3.25 21.75 7.39137 21.75 12.5H23.25C23.25 6.56294 18.4371 1.75 12.5 1.75V3.25ZM7.04274 21.8762C7.10823 21.8531 7.2001 21.8554 7.29451 21.9077L8.02184 20.5958C7.58623 20.3543 7.04889 20.2832 6.54298 20.4619L7.04274 21.8762ZM2.93404 17.4092C2.9814 17.5013 2.98243 17.5893 2.96016 17.6523L4.37446 18.1521C4.54633 17.6657 4.48714 17.1494 4.26804 16.7233L2.93404 17.4092Z" fill="#2B3F6C" />
                                            <circle cx="7.55005" cy="12.5498" r="1.25" fill="#2B3F6C" />
                                            <circle cx="12.55" cy="12.5498" r="1.25" fill="#2B3F6C" />
                                            <circle cx="17.55" cy="12.5498" r="1.25" fill="#2B3F6C" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={!ongoing ? "b-activity-car-third" : "b-activity-car-third-car"}>
                    {
                        ongoing ? <MapContainer
                            center={position}
                            zoom={13}
                            style={{ height: "100%", width: "100%", borderRadius: "8px" }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                                <Popup>Car's Location</Popup>
                            </Marker>
                        </MapContainer>
                            :
                            <img src="https://images.unsplash.com/photo-1572885804161-758436fcc8bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    }


                </div>
                <div className="b-activity-car-third">
                    <div>
                        <div>Vehicle Type: <span>Economy Car</span></div>
                        <div>Color: <span>Red</span></div>
                    </div>
                    <div>
                        <div>License Plate: <span>ABC 1234</span></div>
                        <div>Brand: <span>Toyota</span></div>
                    </div>
                </div>
                <div className="b-activity-car-last">
                    <button className="" id={`open-modal${modalID}`}>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1.5L8 7.5M1 1.5L4.5 4.5L5.375 5.25" stroke="#090909" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default BoxActiviteCar;