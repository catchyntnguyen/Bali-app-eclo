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
import NavService from '../../components/NavService';
import Cartcar from '../../components/Cartcar';
import ButtonProps from '../../components/ButtonProps';
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
              <div className='header'> </div>
              <div className='content'>
                <div className='box-location'>
                  <div className='box-location-header'>
                    <div className='box-l-text'>Location</div>
                    <div className='box-l-user'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s" alt="" />
                    </div>
                  </div>
                  <div className='box-location-next'>
                    <div>
                      <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.05056 0.583252C3.13171 0.583252 0.770996 3.06117 0.770996 6.12492C0.770996 10.2812 6.05056 16.4166 6.05056 16.4166C6.05056 16.4166 11.3301 10.2812 11.3301 6.12492C11.3301 3.06117 8.9694 0.583252 6.05056 0.583252ZM6.05056 8.10408C5.00973 8.10408 4.165 7.21742 4.165 6.12492C4.165 5.03242 5.00973 4.14575 6.05056 4.14575C7.09138 4.14575 7.93611 5.03242 7.93611 6.12492C7.93611 7.21742 7.09138 8.10408 6.05056 8.10408Z" fill="#FF3D00" />
                      </svg>
                    </div>
                    <div>Bangkok ,Thailand</div>
                  </div>
                  <div className='box-location-search'>
                    <div className='icon-search'>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_345_2145)">
                          <path d="M14.8169 13.9336L11.0862 10.203C12.1029 8.9596 12.6027 7.37303 12.4824 5.77145C12.3621 4.16987 11.6307 2.67581 10.4397 1.5983C9.24871 0.520793 7.68911 -0.0577183 6.08351 -0.0175734C4.47792 0.0225715 2.94918 0.678301 1.81349 1.81398C0.677813 2.94966 0.0220832 4.47841 -0.0180617 6.084C-0.0582065 7.68959 0.520305 9.2492 1.59781 10.4402C2.67532 11.6312 4.16938 12.3625 5.77096 12.4829C7.37254 12.6032 8.95911 12.1034 10.2025 11.0867L13.9331 14.8174C14.051 14.9312 14.2089 14.9942 14.3727 14.9928C14.5366 14.9913 14.6934 14.9256 14.8092 14.8097C14.9251 14.6939 14.9909 14.5371 14.9923 14.3732C14.9937 14.2094 14.9307 14.0515 14.8169 13.9336ZM6.24999 11.2505C5.26108 11.2505 4.29438 10.9572 3.47213 10.4078C2.64989 9.85842 2.00903 9.07752 1.63059 8.16389C1.25215 7.25026 1.15313 6.24493 1.34606 5.27502C1.53899 4.30512 2.01519 3.4142 2.71445 2.71494C3.41371 2.01568 4.30463 1.53947 5.27453 1.34655C6.24444 1.15362 7.24977 1.25264 8.1634 1.63108C9.07703 2.00951 9.85793 2.65038 10.4073 3.47262C10.9567 4.29487 11.25 5.26157 11.25 6.25047C11.2485 7.5761 10.7212 8.847 9.78388 9.78436C8.84652 10.7217 7.57561 11.249 6.24999 11.2505Z" fill="#374957" />
                        </g>
                        <defs>
                          <clipPath id="clip0_345_2145">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <input type="text" placeholder={'Bangkok , Bangkok Province , Thailand'} />
                    <div className='bell'>
                      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82609 1C5.46436 1 2.73914 3.72522 2.73914 7.08696V9.17949C2.73914 10.2798 2.03006 11.2422 1.46647 12.1872C1.1702 12.684 1 13.2647 1 13.8851C1 15.488 2.1452 16.8633 3.73291 17.0834C5.3096 17.3021 7.27974 17.522 8.82609 17.522C10.3724 17.522 12.3426 17.3021 13.9193 17.0834C15.507 16.8633 16.6522 15.488 16.6522 13.8851C16.6522 13.2647 16.482 12.684 16.1857 12.1872C15.6221 11.2422 14.913 10.2798 14.913 9.17951V7.08696C14.913 3.72522 12.1878 1 8.82609 1Z" fill="white" />
                        <path d="M1 13.8851H0.25H1ZM3.73291 17.0834L3.83592 16.3405H3.83592L3.73291 17.0834ZM13.9193 17.0834L13.8163 16.3405L13.9193 17.0834ZM3.48914 7.08696C3.48914 4.13944 5.87857 1.75 8.82609 1.75V0.25C5.05015 0.25 1.98914 3.31101 1.98914 7.08696H3.48914ZM3.48914 9.17949V7.08696H1.98914V9.17949H3.48914ZM1.75 13.8851C1.75 13.4037 1.88171 12.9552 2.11062 12.5714L0.822315 11.8031C0.4587 12.4128 0.25 13.1257 0.25 13.8851H1.75ZM3.83592 16.3405C2.63629 16.1742 1.75 15.1313 1.75 13.8851H0.25C0.25 15.8448 1.65411 17.5524 3.6299 17.8263L3.83592 16.3405ZM8.82609 16.772C7.3341 16.772 5.40652 16.5583 3.83592 16.3405L3.6299 17.8263C5.21268 18.0458 7.22537 18.272 8.82609 18.272V16.772ZM13.8163 16.3405C12.2457 16.5583 10.3181 16.772 8.82609 16.772V18.272C10.4268 18.272 12.4395 18.0458 14.0223 17.8263L13.8163 16.3405ZM15.9022 13.8851C15.9022 15.1313 15.0159 16.1742 13.8163 16.3405L14.0223 17.8263C15.9981 17.5524 17.4022 15.8448 17.4022 13.8851H15.9022ZM15.5416 12.5714C15.7705 12.9552 15.9022 13.4037 15.9022 13.8851H17.4022C17.4022 13.1257 17.1935 12.4128 16.8299 11.8031L15.5416 12.5714ZM14.163 7.08696V9.17951H15.663V7.08696H14.163ZM8.82609 1.75C11.7736 1.75 14.163 4.13944 14.163 7.08696H15.663C15.663 3.31101 12.602 0.25 8.82609 0.25V1.75ZM16.8299 11.8031C16.521 11.2851 16.2404 10.8701 16.0091 10.4066C15.7876 9.96289 15.663 9.567 15.663 9.17951H14.163C14.163 9.89235 14.3931 10.5278 14.667 11.0766C14.9311 11.6056 15.2869 12.1443 15.5416 12.5714L16.8299 11.8031ZM1.98914 9.17949C1.98914 9.56698 1.86462 9.96287 1.6431 10.4066C1.41176 10.8701 1.13121 11.2851 0.822315 11.8031L2.11062 12.5714C2.36531 12.1443 2.7211 11.6056 2.98519 11.0766C3.25912 10.5278 3.48914 9.89234 3.48914 9.17949H1.98914Z" fill="#121212" />
                        <path d="M11 19.834C10.5326 20.5369 9.73347 21.0002 8.82609 21.0002C7.91871 21.0002 7.11954 20.5369 6.65218 19.834" stroke="#121212" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='box-service'>
                  <NavService
                    title={'Our Fleet -  service extra'}
                  />
                </div>
                <div className='box-listcart'>
                  <div className='header-listcart'>
                    <h4>Car</h4>
                    <div className='h-listcart-left'>
                      <h4>SUVs</h4>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="#090909" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                  <div className='content-listcart'>
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
                    <ButtonProps
                      title="View more"
                      icon={''}
                      className="buttonMore"
                    />
                  </div>
                </div>
                <div className='box-new'>
                  <div className='header-listcart'>
                    <h4>New</h4>
                    <div className='h-listcart-left'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12" stroke="#090909" stroke-width="1.5" stroke-linecap="round" />
                      </svg>
                    </div>

                  </div>
                  <div className="card-container">
                    <div className="card">
                      <img src="/new.png" alt="Motorbike Image" />
                      <div className="card-content">
                        <h4>Bích Câu | 21/10/2024 21:16</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ...</p>
                      </div>
                    </div>

                    <div className="card">
                      <img src="/new.png" alt="Motorbike Image" />
                      <div className="card-content">
                        <h4>Bích Câu | 21/10/2024 21:16</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  )
};

export default Page;
