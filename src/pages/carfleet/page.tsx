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
import Cartcar from '../../components/Cartcar';
import NavService from '../../components/NavService';
// import Heart from '../../../public/Heart.svg';

const carData = [
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Toyota Yaris Cross",
    seats: 4,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Honda CR-V",
    seats: 5,
    smallBags: 3,
    largeBags: 3,
    transmission: "Manual",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Mazda CX-5",
    seats: 5,
    smallBags: 2,
    largeBags: 4,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  },
  {
    title: "Car Rental",
    imageUrl: "/car.png",
    carModel: "Kia Seltos",
    seats: 5,
    smallBags: 4,
    largeBags: 2,
    transmission: "Automatic",
    cancellationPolicy: "Free cancellation"
  }
];

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className='headerListCar'>
                <Headers2 title="Car Fleet" icon="heart" />
                <div className='parentinputSearch'>
                  <div className='inputSearch'>
                    <div>
                      <div className='inputSearch-left'>
                        <div className='inputSearch-left-icon'>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_160_7941)">
                              <path d="M15.5667 13.9341L11.8361 10.2035C12.8528 8.96008 13.3526 7.37352 13.2323 5.77194C13.1119 4.17036 12.3806 2.67629 11.1896 1.59879C9.99859 0.521281 8.43898 -0.05723 6.83339 -0.0170851C5.2278 0.0230598 3.69905 0.678789 2.56337 1.81447C1.42769 2.95015 0.771961 4.47889 0.731816 6.08449C0.691671 7.69008 1.27018 9.24969 2.34769 10.4407C3.4252 11.6317 4.91926 12.363 6.52084 12.4834C8.12242 12.6037 9.70899 12.1039 10.9524 11.0872L14.683 14.8178C14.8009 14.9317 14.9587 14.9947 15.1226 14.9933C15.2865 14.9918 15.4432 14.9261 15.5591 14.8102C15.675 14.6943 15.7407 14.5376 15.7422 14.3737C15.7436 14.2098 15.6806 14.052 15.5667 13.9341ZM6.99986 11.251C6.01096 11.251 5.04426 10.9577 4.22201 10.4083C3.39977 9.8589 2.7589 9.07801 2.38047 8.16438C2.00203 7.25075 1.90301 6.24542 2.09594 5.27551C2.28886 4.30561 2.76507 3.41469 3.46433 2.71543C4.16359 2.01617 5.05451 1.53996 6.02441 1.34704C6.99432 1.15411 7.99965 1.25313 8.91328 1.63156C9.82691 2.01 10.6078 2.65087 11.1572 3.47311C11.7066 4.29536 11.9999 5.26206 11.9999 6.25096C11.9984 7.57659 11.4711 8.84749 10.5338 9.78485C9.59639 10.7222 8.32549 11.2495 6.99986 11.251Z" fill="#374957" />
                            </g>
                            <defs>
                              <clipPath id="clip0_160_7941">
                                <rect width="15" height="15" fill="white" transform="translate(0.75 0.000488281)" />
                              </clipPath>
                            </defs>
                          </svg>

                        </div>
                        <input type="text" placeholder='Toyota...' />
                      </div>
                      <button className='inputSearch-right'>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_553_3079)">
                            <path d="M8.72052 2.7554C8.56402 2.17955 8.22237 1.6712 7.7483 1.30878C7.27423 0.946358 6.69408 0.75 6.09734 0.75C5.50061 0.75 4.92045 0.946358 4.44638 1.30878C3.97231 1.6712 3.63067 2.17955 3.47417 2.7554H0.75V4.21373H3.47417C3.63067 4.78958 3.97231 5.29792 4.44638 5.66035C4.92045 6.02277 5.50061 6.21913 6.09734 6.21913C6.69408 6.21913 7.27423 6.02277 7.7483 5.66035C8.22237 5.29792 8.56402 4.78958 8.72052 4.21373H18.25V2.7554H8.72052ZM6.09698 4.76061C5.8446 4.76061 5.59789 4.68577 5.38805 4.54555C5.1782 4.40534 5.01465 4.20605 4.91807 3.97288C4.82149 3.73972 4.79622 3.48315 4.84546 3.23562C4.89469 2.98809 5.01622 2.76072 5.19468 2.58227C5.37314 2.40381 5.60051 2.28228 5.84804 2.23304C6.09556 2.1838 6.35213 2.20907 6.5853 2.30566C6.81847 2.40224 7.01776 2.56579 7.15797 2.77563C7.29818 2.98548 7.37302 3.23219 7.37302 3.48456C7.37244 3.82281 7.23782 4.14704 6.99864 4.38622C6.75946 4.6254 6.43523 4.76003 6.09698 4.76061Z" fill="#434343" />
                            <path d="M12.903 6.76562C12.3069 6.76776 11.7278 6.96491 11.2543 7.32697C10.7807 7.68904 10.4386 8.19613 10.2802 8.77083H0.75V10.2292H10.2802C10.4365 10.8051 10.778 11.3137 11.252 11.6763C11.726 12.0388 12.3062 12.2353 12.903 12.2353C13.4998 12.2353 14.08 12.0388 14.5541 11.6763C15.0281 11.3137 15.3696 10.8051 15.5258 10.2292H18.25V8.77083H15.5258C15.3675 8.19613 15.0254 7.68904 14.5518 7.32697C14.0782 6.96491 13.4991 6.76776 12.903 6.76562ZM12.903 10.776C12.6506 10.776 12.4039 10.7012 12.1941 10.561C11.9842 10.4208 11.8207 10.2215 11.7241 9.98832C11.6275 9.75515 11.6023 9.49858 11.6515 9.25106C11.7007 9.00353 11.8223 8.77616 12.0007 8.5977C12.1792 8.41924 12.4066 8.29771 12.6541 8.24848C12.9016 8.19924 13.1582 8.22451 13.3913 8.32109C13.6245 8.41767 13.8238 8.58123 13.964 8.79107C14.1042 9.00091 14.1791 9.24762 14.1791 9.5C14.1787 9.83831 14.0441 10.1627 13.8049 10.4019C13.5657 10.6411 13.2413 10.7757 12.903 10.776Z" fill="#434343" />
                            <path d="M6.09698 12.7812C5.50048 12.7829 4.92093 12.9798 4.4469 13.3419C3.97288 13.704 3.63046 14.2114 3.47198 14.7865H0.75V16.2448H3.47417C3.63067 16.8206 3.97231 17.329 4.44638 17.6914C4.92045 18.0538 5.50061 18.2502 6.09734 18.2502C6.69408 18.2502 7.27423 18.0538 7.7483 17.6914C8.22237 17.329 8.56402 16.8206 8.72052 16.2448H18.25V14.7865H8.72052C8.56211 14.2116 8.21991 13.7045 7.74618 13.3424C7.27245 12.9803 6.69323 12.7832 6.09698 12.7812ZM6.09698 16.7917C5.8446 16.7917 5.59789 16.7168 5.38805 16.5766C5.1782 16.4364 5.01465 16.2371 4.91807 16.0039C4.82149 15.7708 4.79622 15.5142 4.84546 15.2667C4.89469 15.0191 5.01622 14.7918 5.19468 14.6133C5.37314 14.4349 5.60051 14.3133 5.84804 14.2641C6.09556 14.2149 6.35213 14.2401 6.5853 14.3367C6.81847 14.4333 7.01776 14.5968 7.15797 14.8067C7.29818 15.0165 7.37302 15.2632 7.37302 15.5156C7.37244 15.8539 7.23782 16.1781 6.99864 16.4173C6.75946 16.6565 6.43523 16.7911 6.09698 16.7917Z" fill="#434343" />
                          </g>
                          <defs>
                            <clipPath id="clip0_553_3079">
                              <rect x="0.75" y="0.75" width="17.5" height="17.5" rx="5" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentSearch">
                <NavService
                  title={''}
                  option='2'
                />
                {carData.map((car, index) => (
                  <Cartcar
                    key={index}
                    title={car.title}
                    imageUrl={car.imageUrl}
                    carModel={car.carModel}
                    seats={car.seats}
                    smallBags={car.smallBags}
                    largeBags={car.largeBags}
                    transmission={car.transmission}
                    cancellationPolicy={car.cancellationPolicy}
                  />
                ))}
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
};

export default Page;
