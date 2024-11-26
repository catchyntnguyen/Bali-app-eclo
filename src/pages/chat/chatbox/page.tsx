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
    IonLabel,
    IonInput
} from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import Headers2 from '../../../components/header2';



const Page: React.FC = () => {

    return (
        <IonPage>
            <IonContent fullscreen >
                <IonGrid className='contentPage' fixed>
                    <IonRow className="ion-justify-content-center ">
                        <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
                            <Headers2
                                title='Chat' className={''}
                                icon=''
                            />
                            <div className="content4">
                                <div className="boxchatin">
                                    <div className="box_header">
                                        <div className='box_item-driver'>
                                            <div className='box_item-driver-left'>
                                                <div className='imgDriver'>
                                                    <img src="/new.png" alt="" />
                                                </div>
                                                <div className='driverName'>
                                                    John Doe
                                                </div>
                                            </div>
                                            <div className='infoDriver'>
                                                <div className='box_item-icon'>
                                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.43438 1.52831C9.63443 1.26342 10.0323 1.26342 10.2324 1.52831L13.0743 5.29135C13.1342 5.37057 13.2162 5.43019 13.31 5.46261L17.7671 7.00264C18.0809 7.11104 18.2038 7.48946 18.0137 7.76157L15.3131 11.6273C15.2562 11.7087 15.2249 11.8051 15.223 11.9044L15.1357 16.6192C15.1296 16.9511 14.8077 17.185 14.4901 17.0883L9.97905 15.7144C9.88409 15.6854 9.78266 15.6854 9.6877 15.7144L5.17663 17.0883C4.85909 17.185 4.53719 16.9511 4.53104 16.6192L4.4437 11.9044C4.44187 11.8051 4.41052 11.7087 4.35367 11.6273L1.65302 7.76157C1.46292 7.48946 1.58587 7.11104 1.89961 7.00264L6.3567 5.46261C6.45053 5.43019 6.53258 5.37057 6.59241 5.29135L9.43438 1.52831Z" stroke="#FFC107" strokeWidth="1.5" />
                                                    </svg>
                                                    4 / 5
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box_chat">
                                        <div className="box-chat-driver">
                                            <div className="box_chat-content">Hi, I'm your driver</div>
                                            <div className="box_chat-time">2 : 30</div>
                                        </div>
                                        <div className="box-chat-me">
                                            <div className="box_chat-content">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora, mollitia excepturi reprehenderit error
                                            </div>
                                            <div className="box_chat-time">2 : 31</div>
                                        </div>
                                        <div className="box-chat-driver">
                                            <div className="box_chat-content">Hi, I'm your driver</div>
                                            <div className="box_chat-time">2 : 30</div>
                                        </div>
                                        <div className="box-chat-me">
                                            <div className="box_chat-content">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora, mollitia excepturi reprehenderit error
                                            </div>
                                            <div className="box_chat-time">2 : 31</div>
                                        </div>
                                        <div className="box-chat-driver">
                                            <div className="box_chat-content">Hi, I'm your driver</div>
                                            <div className="box_chat-time">2 : 30</div>
                                        </div>
                                        <div className="box-chat-me">
                                            <div className="box_chat-content">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora, mollitia excepturi reprehenderit error
                                            </div>
                                            <div className="box_chat-time">2 : 31</div>
                                        </div>
                                        <div className="box-chat-driver">
                                            <div className="box_chat-content">Hi, I'm your driver</div>
                                            <div className="box_chat-time">2 : 30</div>
                                        </div>
                                        <div className="box-chat-me">
                                            <div className="box_chat-content">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum tempora, mollitia excepturi reprehenderit error
                                            </div>
                                            <div className="box_chat-time">2 : 31</div>
                                        </div>
                                    </div>
                                    <IonFooter className="ion-no-border">
                                        <IonToolbar>
                                            <div className="box_input-send">
                                                <IonRow className="btn-send">
                                                    <button className="btns-send">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L15.95 7H20V19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8ZM12 16C10.35 16 9 14.65 9 13C9 11.35 10.35 10 12 10C13.65 10 15 11.35 15 13C15 14.65 13.65 16 12 16Z"
                                                                fill="black"
                                                            />
                                                        </svg>
                                                    </button>
                                                </IonRow>
                                                <IonRow className="input-send">
                                                    <IonInput placeholder="Ask something" className="inputText-handle" />
                                                </IonRow>
                                                <IonRow className="btn-send">
                                                    <button className="btns-send">
                                                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                                                            <path
                                                                d="M28.9661 15.8972C29.8506 16.3395 29.8506 17.6016 28.9661 18.0439L14.6639 25.195C13.7351 25.6594 12.6948 24.8048 12.9702 23.8035L14.6305 17.766C14.7737 17.2453 14.7737 16.6957 14.6305 16.175L12.9702 10.1376C12.6948 9.13633 13.7351 8.2817 14.6639 8.74612L28.9661 15.8972Z"
                                                                stroke="#2B3F6C"
                                                                strokeWidth="1.5"
                                                            />
                                                            <path d="M18.0817 16.9705L15.2533 16.9705" stroke="#2B3F6C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </IonRow>
                                            </div>
                                        </IonToolbar>
                                    </IonFooter>
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
