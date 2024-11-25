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
import ItemChat from '../../components/itemchat';


const Page: React.FC = () => {
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
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className='success-container-parent'>
                <div className="success-container">
                  <div className="success-logo">
                    <img src="/balilogo.png" alt="Bali Limousines International" />
                  </div>
                  <h1 className="success-status">Successful</h1>
                  <p className="success-confirmation">Awaiting Confirmation</p>
                  <div className="success-note">
                    <p>
                      <strong>Note:</strong>
                    </p>
                    <ol>
                      <li>
                        <strong>Check Your Notifications:</strong> Stay updated by checking your
                        notifications for any messages regarding your ride.
                      </li>
                      <li>
                        <strong>Review Your Booking:</strong> You can view your booking details
                        in the "h" section of the app.
                      </li>
                      <li>
                        <strong>Prepare for Your Ride:</strong> Make sure you are ready for
                        pickup by being at the designated location on time.
                      </li>
                    </ol>
                  </div>
                  <button className="success-button"
                    onClick={() => window.location.href = '/'}
                  >Back home</button>
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
