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
import React, { useState } from 'react';
import { useHistory } from 'react-router';


const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const router = useHistory();

  const navigator = () => {
    router.push('/user');
  };

  const handleSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div className="user-page user-payment-page">
                <div className="user-header">
                  <button className="user-close-btn" onClick={navigator}>✕</button>
                  <button className="user-save-btn">Save</button>
                </div>
                <div className="user-payment-form">
                  <IonRadioGroup value="end">
                    <IonRadio value="end" labelPlacement="end">
                     Card
                    </IonRadio>
                  </IonRadioGroup>
                  <div className="user-card-details">
                    <input
                      type="text"
                      className="user-input"
                      placeholder="Expiration Date"
                    />
                    <div className='user-card-details-under'>
                      <input
                        type="text"
                        className="user-input"
                        placeholder="Expiration Date"
                      />
                      <input type="text" className="user-input" placeholder="CVV" />
                    </div>
                  </div>
                  <label className="user-save-card">
                    <IonCheckbox labelPlacement="end">Save card details</IonCheckbox>
                  </label>
                  <p className="user-payment-info">
                    Your card will be used only to process your order, support your
                    experience on our website, and for other purposes described in our
                    privacy policy.
                  </p>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;