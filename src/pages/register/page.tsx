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
            <IonCol className='contentLR' sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
              <div >
                <div className="login-container">
                  <h1>Register Bali</h1>
                  <form className="login-form">
                    <p className='labelOut'>Email</p>
                    <div className="input-group">
                      <label htmlFor="email">
                        <img src="/Mail.png" alt="Email Icon" />
                      </label>
                      <input type="email" id="email" placeholder="Email" />
                    </div>
                    <p className='labelOut'>Username</p>
                    <div className="input-group">
                      <label htmlFor="name">
                        <img src="/username.png" alt="Username Icon" />
                      </label>
                      <input type="text" id="username" placeholder="Name" />
                    </div>
                    <p className='labelOut'>Password</p>
                    <div className="input-group">
                      <label htmlFor="password">
                        <img src="/key.png" alt="Password Icon" />
                      </label>
                      <input type="password" id="password" placeholder="Password" />
                    </div>
                    <p className='labelOut'>Confirm Password</p>
                    <div className="input-group">
                      <label htmlFor="password">
                        <img src="/key.png" alt="Password Icon" />
                      </label>
                      <input type="password" id="password" placeholder="Confirm Password" />
                    </div>
                    <a href="#" className="forgot-password">
                      Forgot Password?
                    </a>
                    <button type="submit" className="sign-in-btn">
                      Register
                    </button>
                  </form>
                  <div className="social-login">
                    <div className='hrStick'>
                      <img src="/stick1.png" alt="" />
                      <p>Or continue with</p>
                      <img src="/stick2.png" alt="" />
                    </div>
                    <div className="social-icons">
                      <div>
                        <div className='imgIcon icong' >
                          <img src="/google.png" alt="Google" />
                        </div>
                      </div>
                      <div >
                        <div className='imgIcon icona'>
                          <img src="/apple.png" alt="Apple" />
                        </div>
                      </div>
                      <div>
                        <div className='imgIcon iconfb'>
                          <img src="/facebook.png" alt="Facebook" />
                        </div>
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
