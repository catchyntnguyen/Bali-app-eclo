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
import { Link, useHistory } from 'react-router-dom';

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const router = useHistory();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigator = (link: any) => {
    router.push(`${link}`);
  }

  return (
    <IonPage>
      <IonContent fullscreen >
        <IonGrid className='contentPage' fixed>
          <IonRow className="ion-justify-content-center ">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <Link to={'/user/profile'} className='headerUser-info'>
                <div className='headerUser'>
                  <div className='penUser'>
                    <h1> Hi, Catchy</h1>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80552C14.5869 2.73077 16.3274 2.73011 17.4013 3.80405L19.8932 6.2959C20.958 7.36068 20.969 9.08444 19.918 10.1628L10.6849 19.6361C9.97933 20.3599 9.01167 20.7681 8.00124 20.7681L5.24909 20.768C3.96984 20.7679 2.94823 19.7015 3.00203 18.4224L3.12019 15.6134C3.15968 14.6744 3.54996 13.7844 4.2138 13.1195L13.5137 3.80552ZM16.3415 4.86551C15.8533 4.37736 15.0622 4.37766 14.5744 4.86618L12.9113 6.53178L17.1911 10.8116L18.8446 9.11505C19.3224 8.62488 19.3173 7.84136 18.8333 7.35737L16.3415 4.86551ZM5.27446 14.1802L11.8514 7.59325L16.144 11.8858L9.61148 18.5883C9.18816 19.0226 8.60756 19.2675 8.0013 19.2675L5.24916 19.2674C4.82274 19.2674 4.4822 18.9119 4.50014 18.4856L4.61829 15.6765C4.64199 15.1131 4.87616 14.5791 5.27446 14.1802ZM20.5148 20.6948C20.9289 20.6948 21.2645 20.3589 21.2645 19.9445C21.2645 19.5301 20.9289 19.1942 20.5148 19.1942H14.3931C13.9791 19.1942 13.6434 19.5301 13.6434 19.9445C13.6434 20.3589 13.9791 20.6948 14.3931 20.6948H20.5148Z" fill="#F5F5F5" />
                    </svg>
                  </div>

                  <div className='headerUser-info-img'>
                    <img src="/new.png" alt="" />
                  </div>
                  <div className='member-rate'>
                    <div>
                      <div className='text-member'>Member</div>
                      <div className='member_start'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" fill="#FFC107" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9V6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z" fill="#FFC107" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9L8.24 18.17L9.24 13.89L5.92 11.01L10.3 10.63L12 6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z" fill="#FFC107" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="containeruser">
                <div className="section user">
                  <h3>User</h3>
                  <div className="item user">
                    <span>Notification Settings</span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.11499 20.73L7.88499 22.5L17.885 12.5L7.88499 2.5L6.11499 4.27L14.345 12.5L6.11499 20.73Z" fill="black" />
                    </svg>
                    </span>
                  </div>
                  <div className="item user" onClick={(e) => navigator('/user/payment')}>
                    <span>Payment Methods</span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.11499 20.73L7.88499 22.5L17.885 12.5L7.88499 2.5L6.11499 4.27L14.345 12.5L6.11499 20.73Z" fill="black" />
                    </svg>
                    </span>
                  </div>
                </div>
                <div className="section settings">
                  <h3>Setting</h3>
                  <div className="item" onClick={(e) => navigator('/user/language')}>
                    <span>Language Settings</span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.11499 20.73L7.88499 22.5L17.885 12.5L7.88499 2.5L6.11499 4.27L14.345 12.5L6.11499 20.73Z" fill="black" />
                    </svg>
                    </span>
                  </div>
                  <div className="item">
                    <span>Address Settings</span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.11499 20.73L7.88499 22.5L17.885 12.5L7.88499 2.5L6.11499 4.27L14.345 12.5L6.11499 20.73Z" fill="black" />
                    </svg>
                    </span>
                  </div>
                  <div>
                    <div className="item" onClick={toggleDropdown}>
                      <span>Security Settings</span>
                      <span>
                        {isOpen ? (
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.77 6.61523L2 8.38523L12 18.3852L22 8.38523L20.23 6.61523L12 14.8452L3.77 6.61523Z" fill="black" />
                          </svg>

                        ) : (
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.11499 4.27L7.88499 2.5L17.885 12.5L7.88499 22.5L6.11499 20.73L14.345 12.5L6.11499 4.27Z" fill="black" />
                          </svg>
                        )}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="sub-item">
                        <IonRadioGroup className='strawberries' value="strawberries">
                          <div>
                            Two-Factor Authentication
                          </div>
                          <IonRadio value="grapes"></IonRadio>
                        </IonRadioGroup>
                      </div>
                    )}
                  </div>
                  <div className="item">
                    <span>Support & Feedback</span>
                    <span><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.11499 20.73L7.88499 22.5L17.885 12.5L7.88499 2.5L6.11499 4.27L14.345 12.5L6.11499 20.73Z" fill="black" />
                    </svg>
                    </span>
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