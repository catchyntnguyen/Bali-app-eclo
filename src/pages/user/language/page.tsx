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
              <div className="user-page user-profile-page">
                <div className="user-header">
                  <button className="user-close-btn" onClick={navigator}>✕</button>
                  <button className="user-save-btn">Save</button>
                </div>
                <div className="LanguageItem">
                  <IonRadioGroup
                    value={selectedLanguage}
                    onIonChange={(ev: any) => handleSelect(ev.detail.value)}
                  >
                    <IonRadio className='itemLanguage' value="Viet Nam">Viet Nam</IonRadio>
                    <IonRadio className='itemLanguage' value="English">English</IonRadio>
                  </IonRadioGroup>
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