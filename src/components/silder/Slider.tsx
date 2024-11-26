import React, { useRef, useEffect } from 'react';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from '@ionic/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Silder.css';

interface ContainerProgs {
  onFinish: () => void;
}

const dataSlider = [
  {
    id: 1,
    title: 'Welcome to Bali',
    subtitle:
      'Huge delivery network. Helps you find comfortable, safe and cheap rides.',
    imageSldiers: '/slider1.png',
    buttonText: 'Next',
    type: false,
  },
  {
    id: 2,
    title: 'Confirm Your Driver',
    subtitle:
      'Huge delivery network. Helps you find comfortable, safe and cheap rides.',
    imageSldiers: '/slider2.png',
    buttonText: 'Next',
    type: false,
  },
  {
    id: 3,
    title: 'Track Your Ride',
    subtitle:
      'Huge delivery network. Helps you find comfortable, safe and cheap rides.',
    imageSldiers: '/slider3.png',
    buttonText: "Let's Start",
    type: true,
  },
];

const SliderComponent: React.FC<ContainerProgs> = ({ onFinish }) => {
  const sliderRef = useRef<Slider | null>(null);

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

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    swipe: false,
  };

  const handleNextSlide = (type: boolean) => {
    const checkTabbar = document.querySelector('.tabbar');

    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }

    if (type) {
      if (checkTabbar) {
        checkTabbar.classList.remove('hidden');
      }
      onFinish();
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen scrollY={false}>
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="sliderStart-container">
            <div>
              <img
                className="sliderStart-logo"
                src="/balilogo.png"
                alt="Bali Limousines Logo"
              />
              <h1 className="sliderStart-title">Welcome to Bali</h1>
              <button
                className="sliderStart-button"
                onClick={() => handleNextSlide(false)}
              >
                Next
              </button>
            </div>
          </div>

          {dataSlider.map((slide) => (
            <div key={slide.id}>
              <IonGrid fixed>
                <IonRow className="ion-justify-content-center">
                  <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="6">
                    <div className="bg">
                      <img src={slide.imageSldiers} alt={slide.title} />
                    </div>
                    <div className="sliderUnder">
                      <div>
                        <h2>{slide.title}</h2>
                        <p>{slide.subtitle}</p>
                      </div>
                      <div className='buttonSider'>
                        <button
                          className="buttomfullsilder"
                          onClick={() => handleNextSlide(slide.type)}
                        >
                          {slide.buttonText}
                        </button>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </div>
          ))}
        </Slider>
      </IonContent>
    </IonPage>
  );
};

export default SliderComponent;
