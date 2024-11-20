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


const Page: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className='header3'>
                <div className='header3Navigation'>
                  <button >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 15V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V9" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15" stroke="#D9D9D9" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    payments
                  </button>
                  <div className='headercontent'>
                    The simplest and most rewarding way to pay
                  </div>
                </div>
                <div className='header3InputCart'>
                  <div className='icon-cart'>
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0.5H2C0.89 0.5 0.00999999 1.39 0.00999999 2.5L0 14.5C0 15.61 0.89 16.5 2 16.5H18C19.11 16.5 20 15.61 20 14.5V2.5C20 1.39 19.11 0.5 18 0.5ZM18 14.5H2V8.5H18V14.5ZM18 4.5H2V2.5H18V4.5Z" fill="white" />
                    </svg>
                  </div>
                  <div className='text-cart'>
                    <div>Add a card</div>
                    <p>Go cashless with a credit or debit card</p>
                  </div>
                </div>
              </div>
              <div className="content3">
                <div className='buttomAddCart'>
                  <button>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z" fill="#FFC107" />
                    </svg>
                    Add cart
                  </button>
                </div>
                <div className='cartNothing'>
                  <img src="/nothing.png" alt="" />
                  <div className='cartNothing-conent'>
                    <h4>Nothing’s happening now</h4>
                    <p>When you use our sevices, you will see them here.</p>
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
