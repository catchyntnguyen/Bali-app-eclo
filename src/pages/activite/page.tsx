import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonNavLink,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonLabel
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import Headers2 from '../../components/header2';
import BoxActiviteCar from '../../components/Boxactiviticar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SliderCar from '../../components/SliderCar';
const position = [10.762622, 106.660172];

const Page: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <Headers2
                title='Activity'
                className=''
                icon={''}
              />
              <div className='content2'>
                <BoxActiviteCar
                  status='1'
                  modalID={1}
                />
                <BoxActiviteCar
                  status='2'
                  modalID={2}
                />
              </div>
              <IonModal ref={modal} trigger="open-modal1" initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className="block">
                  <IonContent className="IonContent">
                    <div >
                      <div className='content-main'>
                        <SliderCar data={[{ imageUrl: "/imgcar.png", altText: "Car 1" }, { imageUrl: "/imgcar.png", altText: "Car 2" }]} />
                      </div>
                      <div>
                        <div className="contentModel-first">
                          <div className="contentModel">
                            <div className="b-activity-car-first ">
                              <div className="b-activity-c-left">
                                <div className="b-activity-c-id">#123456</div>
                                <div className="b-activity-c-day">October 24, 2024, 10:00 AM</div>
                              </div>
                              <div className="b-activity-c-right ">
                                <button className="button">
                                  S
                                </button>
                              </div>
                            </div>
                            <div className="model-car-detail ">
                              <div>Vehicle Type: Economy Car</div>
                              <div>Color: Red</div>
                              <div>License Plate: ABC 1234</div>
                              <div>Brand: Toyota</div>
                            </div>
                            <div className="b-activity-car-secondary driver-model">
                              <div className="b-activity-car-s-driver">
                                <div className="driver-content">
                                  <div className="driver-content-1">
                                    <div className="img-driver">
                                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                    </div>
                                    <div className="Info-driver text-base">
                                      <div className="driver-name">
                                        John Doe
                                      </div>
                                      <div className="driver-phone">
                                        123456789
                                      </div>
                                    </div>
                                  </div>
                                  <div className="driver-content-2">
                                    {/* <div>
                                                            <img src="/Star2.png " alt="" />
                                                            <span className="rate text-base">4.9/5</span>
                                                        </div> */}
                                    <div className="driver-content-2-left">
                                      <div className="circle">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.5621 20.7183C17.6077 22.6726 12.6028 20.8363 8.38327 16.6167C4.16372 12.3972 2.32739 7.39227 4.2817 5.43795L5.56847 4.15118C6.4568 3.26286 7.92054 3.28634 8.83784 4.20363L10.8309 6.19672C11.7482 7.11401 11.7717 8.57776 10.8834 9.46609L10.607 9.74247C10.1274 10.2221 10.0804 10.9958 10.5261 11.5359C10.956 12.0568 11.4194 12.5756 11.9219 13.0781C12.4244 13.5806 12.9432 14.044 13.4641 14.4739C14.0042 14.9196 14.7779 14.8726 15.2575 14.393L15.5339 14.1166C16.4222 13.2283 17.886 13.2518 18.8033 14.1691L20.7964 16.1622C21.7137 17.0795 21.7371 18.5432 20.8488 19.4315L19.5621 20.7183Z" stroke="#2B3F6C" stroke-width="1.5" />
                                        </svg>
                                      </div>
                                      <div className="circle">
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
                          </div>
                        </div>
                        <div className="contentModel-secondary">
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19.7232 2.75895C20.6613 2.44624 21.5538 3.33873 21.2411 4.27684L16.1845 19.4467C15.8561 20.4318 14.5163 20.5631 14.0029 19.6603L10.9078 14.2172C10.6409 13.7478 10.2522 13.3591 9.78283 13.0922L4.33973 9.99712C3.437 9.4838 3.56824 8.14394 4.55342 7.81555L19.7232 2.75895Z" stroke="#900B09" stroke-width="1.5" />
                                  <path d="M12.7858 11.2144L10.7858 13.2144" stroke="#900B09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </div>
                              <div className="title-d-t-text ">
                                Journey Details:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Pickup Location: 123 Street Name, City
                              </div>
                              <div>
                                Drop-off Location: 456 Avenue Name, City
                              </div>
                              <div>
                                Distance: 10 km
                              </div>
                              <div>
                                Estimated Time: 15 minutes
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Cancellation Policy:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Cancellation Fee: Free after 15 minutes
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Additional Services:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Drink Service: watter x1
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Total:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                <div>$27.00</div>
                                <button>
                                  Detail bill
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonContent>
                </div>
              </IonModal>
              <IonModal ref={modal} trigger="open-modal2" initialBreakpoint={1} breakpoints={[0, 1]}>
                <div className="block">
                  <IonContent className="IonContent">
                    <div >
                      <div className='content-main'>
                        <MapContainer
                          center={position}
                          zoom={13}
                          style={{ height: "300px", width: "100%", borderRadius: "8px" }}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          />
                          <Marker position={position}>
                            <Popup>Car's Location</Popup>
                          </Marker>
                        </MapContainer>
                      </div>
                      <div>
                        <div className="contentModel-first">
                          <div className="contentModel">
                            <div className="b-activity-car-first ">
                              <div className="b-activity-c-left">
                                <div className="b-activity-c-id">#123456</div>
                                <div className="b-activity-c-day">October 24, 2024, 10:00 AM</div>
                              </div>
                              <div className="b-activity-c-right ">
                                <button className="button">
                                  S
                                </button>
                              </div>
                            </div>
                            <div className="model-car-detail ">
                              <div>Vehicle Type: Economy Car</div>
                              <div>Color: Red</div>
                              <div>License Plate: ABC 1234</div>
                              <div>Brand: Toyota</div>
                            </div>
                            <div className="b-activity-car-secondary driver-model">
                              <div className="b-activity-car-s-driver">
                                <div className="driver-content">
                                  <div className="driver-content-1">
                                    <div className="img-driver">
                                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                    </div>
                                    <div className="Info-driver text-base">
                                      <div className="driver-name">
                                        John Doe
                                      </div>
                                      <div className="driver-phone">
                                        123456789
                                      </div>
                                    </div>
                                  </div>
                                  <div className="driver-content-2">
                                    {/* <div>
                                                            <img src="/Star2.png " alt="" />
                                                            <span className="rate text-base">4.9/5</span>
                                                        </div> */}
                                    <div className="driver-content-2-left">
                                      <div className="circle">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.5621 20.7183C17.6077 22.6726 12.6028 20.8363 8.38327 16.6167C4.16372 12.3972 2.32739 7.39227 4.2817 5.43795L5.56847 4.15118C6.4568 3.26286 7.92054 3.28634 8.83784 4.20363L10.8309 6.19672C11.7482 7.11401 11.7717 8.57776 10.8834 9.46609L10.607 9.74247C10.1274 10.2221 10.0804 10.9958 10.5261 11.5359C10.956 12.0568 11.4194 12.5756 11.9219 13.0781C12.4244 13.5806 12.9432 14.044 13.4641 14.4739C14.0042 14.9196 14.7779 14.8726 15.2575 14.393L15.5339 14.1166C16.4222 13.2283 17.886 13.2518 18.8033 14.1691L20.7964 16.1622C21.7137 17.0795 21.7371 18.5432 20.8488 19.4315L19.5621 20.7183Z" stroke="#2B3F6C" stroke-width="1.5" />
                                        </svg>
                                      </div>
                                      <div className="circle">
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
                          </div>
                        </div>
                        <div className="contentModel-secondary">
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19.7232 2.75895C20.6613 2.44624 21.5538 3.33873 21.2411 4.27684L16.1845 19.4467C15.8561 20.4318 14.5163 20.5631 14.0029 19.6603L10.9078 14.2172C10.6409 13.7478 10.2522 13.3591 9.78283 13.0922L4.33973 9.99712C3.437 9.4838 3.56824 8.14394 4.55342 7.81555L19.7232 2.75895Z" stroke="#900B09" stroke-width="1.5" />
                                  <path d="M12.7858 11.2144L10.7858 13.2144" stroke="#900B09" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                              </div>
                              <div className="title-d-t-text ">
                                Journey Details:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Pickup Location: 123 Street Name, City
                              </div>
                              <div>
                                Drop-off Location: 456 Avenue Name, City
                              </div>
                              <div>
                                Distance: 10 km
                              </div>
                              <div>
                                Estimated Time: 15 minutes
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Cancellation Policy:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Cancellation Fee: Free after 15 minutes
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Additional Services:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                Drink Service: watter x1
                              </div>
                            </div>
                          </div>
                          <div className="detail-trip">
                            <div className="title-detail-trip">
                              <div className="title-d-t-text">
                                Total:
                              </div>
                            </div>
                            <div className="content-detail-trip">
                              <div>
                                <div>$27.00</div>
                                <button>
                                  Detail bill
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </IonContent>
                </div>
              </IonModal>
            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
};

export default Page;
