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
import { useHistory } from 'react-router';

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('Please select your gender');
  const router = useHistory();

  const navigator = () =>{
    router.push('/user');
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (gender: string) => {
    setSelectedGender(gender);
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
                <div className="user-avatar-section">
                  <img
                    src="/new.png"
                    alt="User Avatar"
                    className="user-avatar"
                  />
                  <div className="user-rating">
                    <div className='member_start'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                      </svg>
                      
                    </div>
                  </div>
                </div>
                <div className="user-form">
                  <form action="">
                    <label className="user-label">Name</label>
                    <input type="text" className="user-input" placeholder="Enter your name" />
                    <label className="user-label">Enter your email address</label>
                    <input type="email" className="user-input" placeholder="Enter your email" />
                    <label className="user-label">Mobile Number</label>
                    <div className="user-mobile">
                      <span className="user-country-code">🇻🇳 +84</span>
                      <input
                        type="text"
                        className="user-input user-phone"
                        placeholder={`0349873812`}
                      />
                    </div>
                    <div className="gender-select-container">
                      <label className="user-label">Gender</label>
                      <div className="dropdown" onClick={toggleDropdown}>
                        <div className="genderdropdown">{selectedGender}</div>
                        {isOpen && (
                          <div className="genderdropdown-options">
                            <div onClick={() => handleSelect('Male')} className="option">Male</div>
                            <div onClick={() => handleSelect('Female')} className="option">Female</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
                <button className="user-logout-btn">
                  Logout 
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 16V18C16.5 20.2091 14.7091 22 12.5 22H7.5C5.29086 22 3.5 20.2091 3.5 18V6C3.5 3.79086 5.29086 2 7.5 2H12.5C14.7091 2 16.5 3.79086 16.5 6V8" stroke="#FF3D00" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M19.5 15L21.7929 12.7071C22.1834 12.3166 22.1834 11.6834 21.7929 11.2929L19.5 9" stroke="#FF3D00" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M21.5 12L9.5 12" stroke="#FF3D00" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                </button>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;